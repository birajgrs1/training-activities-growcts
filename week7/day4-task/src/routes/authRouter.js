import { login, register } from "../controllers/authController.js";
import express from "express";
import  loginLimiter  from "../middlewares/rateLimiter.js";

const authRouter = express.Router();

authRouter.post("/login", loginLimiter, login);
authRouter.post("/register", register);

export default authRouter;
