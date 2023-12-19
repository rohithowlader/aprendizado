const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
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
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }

  try {
    //Hash The password
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});
//JSON web Tokens
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};
const User = mongoose.model("User", userSchema);
module.exports = User;
