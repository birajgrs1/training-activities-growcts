import express from "express";
import {
  userRegister,
  userLogin,
  userLogout,
  refreshAccessToken,
  firstTimeChangePassword,
  changePassword,
  forgotPassword,
  resetPassword,
  verifyOTP
} from "../controllers/authController.js";

import { authenticate } from "../middlewares/authMiddlewares.js"; 

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/logout", userLogout);
router.post("/first-time-change-password", firstTimeChangePassword);
router.post("/refresh", refreshAccessToken);

router.post("/change-password", authenticate, changePassword);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/verify-otp", verifyOTP);

export default router;
