// import mangoose from "mongoose";
import mangoose from "mongoose";
import bcrypt from "bcrypt";
import { emailRegex } from "../utils/validators.js";

const userSchema = new mangoose.Schema({
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
    enum: ["admin", "user","manager", "hr"],
    default: "admin",
  },
  failedAttempts: {
    type: Number,
    default: 0,
  },
  isLocked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mangoose.model("User", userSchema);
export default User;
