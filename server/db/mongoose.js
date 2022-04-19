const mongoose = require("mongoose");
const debug = require("debug")("server:mongoose");

require("dotenv").config();
const connectionString =
  process.env.MONGO_URL || "mongodb://localhost:27017/farmstand";
// console.log("CHECKSTRING", connectionString);
mongoose.connect(connectionString) 
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });
// () => {
//   debug(`connected to mongoose on $ {connectionString}`);
// };

module.exports = mongoose;
