const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  otp: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, { timestamps: true });

const Otp = mongoose.model("Otp", otpSchema);

module.exports = Otp;
