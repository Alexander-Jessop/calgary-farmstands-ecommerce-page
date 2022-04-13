const mongoose = require("mongoose");
const debug = require("debug")("server:mongoose");

require("dotenv").config();
const connectionString =
  process.env.MONGO_URL || "mongodb://localhost:27017/farmstand";
console.log("CHECKSTRING", connectionString);
mongoose.connect(connectionString);
() => {
  debug(`connected to mongoose on $ {connectionString}`);
};

module.exports = mongoose;
