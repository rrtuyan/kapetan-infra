import mongoose from "mongoose";

const verificationSchema = mongoose.Schema({
  identifier: { type: String, required: true },
  hash: { type: String, required: true },
  expires_at: { type: String, required: true },
});

export default mongoose.model("Verification", verificationSchema);
