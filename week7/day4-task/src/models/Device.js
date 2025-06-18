import mongoose from "mongoose";
const deviceSchema = new mongoose.Schema({
  employeeId: mongoose.Schema.Types.ObjectId,
  deviceInfo: String,
  loginAt: { type: Date, default: Date.now },
});
export default mongoose.model("Device", deviceSchema);
