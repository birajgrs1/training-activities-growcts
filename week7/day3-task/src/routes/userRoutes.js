import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/rbac.middleware.js";

const userRouter = express.Router();

userRouter.get(
  "/dashboard",
  authenticate,
  authorizeRoles("employee", "manager", "admin"),
  (req, res) => {
    res.json({ message: "Welcome to a dashboard!", user: req.user });
  }
);

export default userRouter;

