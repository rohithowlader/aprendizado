const express = require("express");
const app = express();
const router = require("./router/auth-router");

//Mount the Router: To use the router in your main express app
app.use("/api/auth", router);

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to my page");
// });
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
