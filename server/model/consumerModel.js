const mongoose = require("../mongoose");
const { Schema, model } = mongoose;
const consumerSchema = new Schema({
  Username: String, // String is shorthand for {type: String}
  Password: String,
});
const consumerModel = model("Consumer", consumerSchema);
