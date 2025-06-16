import mongoose from "mongoose";
import { emailRegex, phoneRegex } from "../utils/validators.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    phone:{
      type: String,
      match: phoneRegex || 'Invalid phone number',
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: emailRegex || 'Invalid email address',
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    roles: {
      type: [String],
      enum: ["admin", "manager", "employee"],
      default: ["admin"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;