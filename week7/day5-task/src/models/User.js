import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  roles: [String],
  tokenVersion: { type: Number, default: 0 },
  isVerified: { type: Boolean, default: false },
  isLocked: { type: Boolean, default: false },
  forcePasswordChange: { type: Boolean, default: true },
  failedLogins: [{
    timestamp: Date,
    ip: String,
    userAgent: String
  }],
  resetToken: {
    token: String,
    expiresAt: Date
  },
  devices: [{
    deviceId: String,
    browser: String,
    os: String,
    lastLogin: Date
  }]
});

export default mongoose.model("User", userSchema);
