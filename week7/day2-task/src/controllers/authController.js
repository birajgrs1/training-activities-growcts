import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import User from "../models/User.js";
import User from "../models/User.js";

//register
export const userRegister = async (req, res) => {
  try {
    const { name, phone, email, password, roles } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        phone,
        email,
        password: hashedPassword,
        roles,
      });
      await newUser.save();
      return res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//login
export const userLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      } else {
        const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, {
          expiresIn: "1h",
        });
        return res.status(200).json({ message: "Login successful", token });
      }
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

//logout
export const userLogout = async (req, res) => {
  try {
    return res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
