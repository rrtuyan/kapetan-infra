import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
  hash: { type: String, required: true },
  identifier: { type: String, required: true },
  specifics: {
    type: Object,
    required: true,
    default: {
      headers:
        "Kapetan/1.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      cidr: "0.0.0.0/0",
    },
  },
  expires_at: { type: String, required: true },
});

export default mongoose.model("Session", sessionSchema);
