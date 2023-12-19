require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./utils/db");
//add express middleware that parses incomming request body with JSON payloads
app.use(express.json());
//Mount the Router: To use the router in your main express app
app.use("/api/auth", router);
connectDB();
// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to my page");
// });
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
