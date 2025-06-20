import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { port } from "./src/config/env.js";
import connectDB from "./src/config/db.js";
import router from "./src/routes/route.js";

dotenv.config(); 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

app.use("/api/auth", router); 

app.get("/", (req, res) => {
  res.send("User Lifecycle, Account Security & Login Alerts API Running!");
});

connectDB();

app.listen(port, () => {
  console.log(` Server is running at http://localhost:${port}`);
});