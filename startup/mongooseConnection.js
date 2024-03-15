"use strict"

const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);


const mongooseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected");
  } catch (error) {
    console.log("db not connected");
    throw new Error("db connection is failed");
  }
};

module.exports = { mongooseConnection };

