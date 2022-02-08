const mongoose = require("mongoose");

// connect to database
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGOURI);

    console.log("Connected to DB");
  } catch (err) {
    console.log(`Error Connecting to DB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
