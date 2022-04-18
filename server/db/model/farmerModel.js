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
  businessname: String,
  address: addressSchema,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const FarmerModel = model("Farmer", farmerSchema);

const createFarmerModel = async (farmerModel) => {
  const newFarmerModel = await FarmerModel.create(farmerModel);
  return newFarmerModel;
};

const getAllFarmerModels = async () => {
  const farmerModels = await FarmerModel.find();
  return farmerModels;
};

module.exports = { getAllFarmerModels, createFarmerModel };
