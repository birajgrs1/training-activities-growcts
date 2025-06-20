import mongoose from "mongoose";
const deviceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userAgent: String,
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("Device", deviceSchema);