const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const users = require("../../index").users;

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({ message: "User not found." });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password." });
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({
    message: "Login successful",
    token
  });
});

module.exports = router;


/*
{
  "email": "biraj@example.com",
  "password": "mypassword123"
}

*/