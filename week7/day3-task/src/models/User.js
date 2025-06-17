import mongoose from "mongoose";
import { emailRegex } from "../utils/validators.js";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 3 },
    email: {
      type: String,
      required: true,
      unique: true,
      match: emailRegex,
    },
    password: { type: String, required: true, minlength: 6 },
    roles: {
      type: [String],
      enum: ["admin", "manager", "employee"],
      default: ["employee"],
    },
    tokenVersion: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
