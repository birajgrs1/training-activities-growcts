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


router.get("/reset-password/:token", (req, res) => {
  const { token } = req.params;
  res.send(`
    <h2>Reset Your Password</h2>
    <form action="/api/auth/reset-password" method="POST">
      <input type="hidden" name="token" value="${token}" />
      <input type="password" name="newPassword" placeholder="Enter new password" required />
      <button type="submit">Reset Password</button>
    </form>
  `);
});

router.post("/reset-password", resetPassword);


export default router;
