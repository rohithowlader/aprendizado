const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.MONGO_CONNECTION_URL);

  const db = mongoose.connection;
  try {
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
      console.log("Database Connected successfully");
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
