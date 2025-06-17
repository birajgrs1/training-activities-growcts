import express from "express";
import cookieParser from "cookie-parser";
import {
  userRegister,
  userLogin,
  userLogout,
  refreshAccessToken,
  changePassword,
} from "../controllers/authController.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { loginLimiter } from "../middlewares/ratelimiter.middleware.js";

const authRouter = express.Router();


authRouter.use(cookieParser());

authRouter.post("/register", userRegister);
authRouter.post("/login", loginLimiter, userLogin);
authRouter.post("/logout", userLogout);
authRouter.post("/refresh-token", refreshAccessToken);
authRouter.post("/change-password", authenticate, changePassword);

export default authRouter;
