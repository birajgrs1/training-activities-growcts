import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { emailRegex } from "../utils/validators.js";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: emailRegex,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "admin",
  },
  failedAttempts: {
    type: Number,
    default: 0,
  },
  isLocked: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

employeeSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next(); 
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
