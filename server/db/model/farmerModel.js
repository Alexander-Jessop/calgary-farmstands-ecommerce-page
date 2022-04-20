const mongoose = require("../mongoose");
const { Schema } = mongoose;

const farmerSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  businessname: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    street: String,
    city: String,
    province: String,
    postalcode: String,
  },
  // comments: [{ body: String, date: Date }],
  // date: { type: Date, default: Date.now },
  // hidden: Boolean,
  // meta: {
  //   votes: Number,
  //   favs: Number,
  // },
});



// const createFarmerModel = async (farmerModel) => {
//   const newFarmerModel = await FarmerModel.create(farmerModel);
//   return newFarmerModel;
// };

// const getAllFarmerModels = async () => {
//   const farmerModels = await FarmerModel.find();
//   return farmerModels;
// };

const FarmerModel = mongoose.model("Farmer", farmerSchema);

module.exports =  FarmerModel;
