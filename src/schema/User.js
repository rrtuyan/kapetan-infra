import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  identifier: {
    type: String,
    required: true,
  },
  creation_date: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
  name: {
    type: Object,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  birthdate: {
    type: String,
    required: true,
  },
  address: {
    type: Array,
    required: true,
    default: [{}],
  },
  cart: {
    type: Array,
    required: true,
    default: [{}],
  },
});

export default mongoose.model("User", userSchema);
