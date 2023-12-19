const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    requied: true,
  },
  email: {
    type: String,
    requied: true,
  },
  phone: {
    type: String,
    requied: true,
  },
  password: {
    type: String,
    requied: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
