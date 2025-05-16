const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const users = require("../../index").users;

function isValidEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long." });
  }

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { name, email, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({
    message: "User registered successfully!",
    user: { name: newUser.name, email: newUser.email },
  });
});

module.exports = router;


/*
{
  "name": "Biraj",
  "email": "biraj@example.com",
  "password": "mypassword123"
}
*/