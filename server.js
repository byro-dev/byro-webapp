require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("server is running on ", PORT);
});
