const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// In-memory user storage
const users = [];
module.exports.users = users;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const registerRoute = require("./routes/auth/register");
const loginRoute = require("./routes/auth/login");

app.use("/auth/register", registerRoute);
app.use("/auth/login", loginRoute);

app.get("/", (req, res) => {
  res.send("Home Page!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`AuthService app listening at http://localhost:${port}`);
});
