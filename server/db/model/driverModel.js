const mongoose = require("../mongoose");
const { Schema } = mongoose;

const driverSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  password: String,
  userid: String,
  phone: Number,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  businessname: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const driverModel = model("Driver", driverSchema);
