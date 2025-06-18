import Employee from "../models/User.js";
import Device from "../models/Device.js";
import jwt from "jsonwebtoken";
import notifyUser from "../utils/notifyUser.js";


export const register = async (req, res) => {
    const {name, email, password, role } = req.body;
    const user = await Employee.create({ name, email, password, role });
    res.status(201).json(user);
};


export const login = async (req, res) => {
  const { email, password, deviceInfo } = req.body;
  const user = await Employee.findOne({ email });

  if (!user) return res.status(403).json({ error: "Invalid credentials" });
  if (user.isLocked) return res.status(403).json({ error: "Account locked" });

  if (password !== user.password) {
    user.failedAttempts += 1;
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
};


