import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import RefreshToken from "../models/RefreshToken.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/tokenGenerator.js";
import { addToBlacklist, isBlacklisted } from "../blacklists/tokenBlackList.js";

// Register
export const userRegister = async (req, res) => {
  try {
    const { name, email, password, roles } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, roles });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Invalid credentials" });

    // Generate tokens
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Save refresh token in DB
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    await RefreshToken.create({
      userId: user._id,
      token: refreshToken,
      expiresAt: expiry,
    });

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

// Logout
export const userLogout = async (req, res) => {
  try {
    const token = req.cookies.jid;
    if (token) {
      addToBlacklist(token);
      await RefreshToken.findOneAndUpdate({ token }, { revoked: true });
    }
    res.clearCookie("jid");
    res.json({ message: "Logout successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const refreshAccessToken = async (req, res) => {
  try {
    const token = req.cookies.jid;
    if (!token)
      return res.status(401).json({ message: "Refresh token missing" });

    if (isBlacklisted(token))
      return res.status(403).json({ message: "Refresh token revoked" });

    const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    const savedToken = await RefreshToken.findOne({ token, revoked: false });
    if (!savedToken)
      return res.status(403).json({ message: "Refresh token invalid" });

    const user = await User.findById(payload.id);
    if (!user || user.tokenVersion !== payload.tokenVersion) {
      return res.status(403).json({ message: "Invalid token version" });
    }

    // Rotate token
    savedToken.revoked = true;
    await savedToken.save();

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    await RefreshToken.create({
      userId: user._id,
      token: newRefreshToken,
      expiresAt: expiry,
    });

    res.cookie("jid", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired refresh token" });
  }
};

// Password Change
export const changePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Old password incorrect" });

    user.password = await bcrypt.hash(newPassword, 10);
    user.tokenVersion += 1;
    await user.save();

    await RefreshToken.updateMany({ userId: user._id }, { revoked: true });

    res.json({ message: "Password changed successfully, please login again" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
