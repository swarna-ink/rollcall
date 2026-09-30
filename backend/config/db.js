// Database connection file - MongoDB er sathe connect korar jonno
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Server stop korar jonno error er somoy
  }
};

module.exports = connectDB;