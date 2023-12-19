const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to my page using router");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    //console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(201).send({
      message: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { home, register };
