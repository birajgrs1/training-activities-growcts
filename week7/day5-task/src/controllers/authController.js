import User from "../models/User.js";
import OTP from "../models/OTP.js";
import RefreshToken from "../models/RefreshToken.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { sendEmail } from "../services/emailService.js";
import { generateAccessToken, generateRefreshToken } from "../utils/tokenUtils.js";

const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_TIME_MINUTES = 15;


export const userRegister = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, phone, email, password: hashedPassword });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password, deviceId, browser, os } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    if (user.isLocked) {
      const lastAttempt = user.failedLogins?.slice(-1)[0]?.timestamp || new Date();
      const diff = (new Date() - new Date(lastAttempt)) / (1000 * 60);
      if (diff < LOCKOUT_TIME_MINUTES)
        return res.status(403).json({ message: "Account locked. Try later." });
      user.isLocked = false;
      user.failedLogins = [];
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      user.failedLogins.push({
        timestamp: new Date(),
        ip: req.ip,
        userAgent: req.headers["user-agent"]
      });
      if (user.failedLogins.length >= MAX_FAILED_ATTEMPTS) user.isLocked = true;
      await user.save();
      return res.status(400).json({ message: "Invalid credentials" });
    }

    user.failedLogins = [];

    const knownDevice = user.devices.find(d => d.deviceId === deviceId);
    if (!knownDevice) {
      user.devices.push({ deviceId, browser, os, lastLogin: new Date() });
    } else {
      knownDevice.lastLogin = new Date();
    }

    if (user.forcePasswordChange)
      return res.status(403).json({ message: "First-time login. Please change password." });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    await RefreshToken.create({
      userId: user._id,
      token: refreshToken,
      expiresAt: expiry,
    });

    await user.save();

    res.cookie("jid", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



export const userLogout = async (req, res) => {
  try {
    res.clearCookie("jid");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const refreshAccessToken = async (req, res) => {
  res.status(501).json({ message: "Not implemented" });
};

export const firstTimeChangePassword = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (!user.forcePasswordChange)
      return res.status(400).json({ message: "Not a first-time password change request" });

    const validOld = await bcrypt.compare(oldPassword, user.password);
    if (!validOld)
      return res.status(400).json({ message: "Old password is incorrect" });

    user.password = await bcrypt.hash(newPassword, 10);
    user.forcePasswordChange = false;
    user.tokenVersion += 1;
    await user.save();

    res.json({ message: "Password changed successfully. Please login again." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const changePassword = async (req, res) => {
  try {
    const { userId } = req.user; 
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) return res.status(400).json({ message: "Old password is incorrect" });

    user.password = await bcrypt.hash(newPassword, 10);
    user.tokenVersion += 1;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json({ message: "If user exists, reset link sent" });

  const token = crypto.randomBytes(32).toString("hex");
  const hash = crypto.createHash("sha256").update(token).digest("hex");

  user.resetToken = {
    token: hash,
    expiresAt: Date.now() + 15 * 60 * 1000,
  };
  await user.save();

  const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`;
  await sendEmail(user.email, "Password Reset", `Click: ${resetLink}`);

  res.json({ message: "Reset link sent" });
};

export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    "resetToken.token": hashedToken,
    "resetToken.expiresAt": { $gt: Date.now() },
  });
  if (!user) return res.status(400).json({ message: "Token invalid or expired" });

  user.password = await bcrypt.hash(newPassword, 10);
  user.tokenVersion += 1;
  user.resetToken = undefined;
  user.forcePasswordChange = false;
  await user.save();

  res.json({ message: "Password reset successful" });
};

export const verifyOTP = async (req, res) => {
  try {
    const { userId, code, type } = req.body || {};

    if (!userId || !code || !type) {
      return res.status(400).json({ message: "userId, code, and type are required" });
    }

    const otp = await OTP.findOne({
      userId,
      code,
      type,
      isUsed: false,
      expiresAt: { $gt: new Date() },
    });

    if (!otp) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    otp.isUsed = true;
    await otp.save();

    await User.findByIdAndUpdate(userId, { isVerified: true });

    res.status(200).json({ message: "OTP verified" });

  } catch (err) {
    console.error("Error verifying OTP:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
