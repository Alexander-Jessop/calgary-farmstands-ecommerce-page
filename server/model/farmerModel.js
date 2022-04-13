const mongoose = require("../mongoose");
const { Schema } = mongoose;

const farmerSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  password: String,
  phone: Number,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  businessName: String,
  address: addressSchema,
  comments: [{ body: StringConstructor, date: DateConstructor }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const farmerModel = model("Farmer", farmerSchema);
