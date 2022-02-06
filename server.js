require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// connect to database
const MONGOURI = process.env.MONGOURI;
mongoose.connect(MONGOURI);
mongoose.connection.on("connected", () => {
  console.log("conneted db");
});
mongoose.connection.on("error", (err) => {
  console.log("err connecting to db", err);
});

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("server is running on ", PORT);
});
