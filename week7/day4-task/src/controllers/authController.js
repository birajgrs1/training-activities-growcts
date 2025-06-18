import Employee from "../models/Employee.js";
import Device from "../models/Device.js";
import jwt from "jsonwebtoken";
import notifyUser from "../utils/notifyUser.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await Employee.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new Employee({
      name,
      email,
      password,
      role: role || "admin",
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


export const login = async (req, res) => {
  const { email, password, deviceInfo } = req.body;
  const user = await Employee.findOne({ email });

  if (!user) return res.status(403).json({ error: "Invalid credentials" });
  if (user.isLocked) return res.status(403).json({ error: "Account locked" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    user.failedAttempts = (user.failedAttempts || 0) + 1;
    if (user.failedAttempts >= 3) user.isLocked = true;
    await user.save();
    return res.status(403).json({ error: "Invalid credentials" });
  }

  user.failedAttempts = 0;
  await user.save();

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
  await new Device({ employeeId: user._id, deviceInfo }).save();

  notifyUser(user.email, deviceInfo);
  res.json({ token });
  console.log("BODY:", req.body);

};


