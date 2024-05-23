const mongoose = require("mongoose");
//auth Controller will handle login and signup
const userLoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
  refId: {
    type: String,
    required: true,
  },
  createdDateTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("userauths", userLoginSchema);