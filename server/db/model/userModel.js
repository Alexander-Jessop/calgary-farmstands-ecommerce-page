const mongoose = require("../mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
  Username: String,
  Password: String,
  farmstand_id: { type: String },
});
const UserModel = model("User", userSchema);

const createUserModel = async (userModel) => {
  const newUserModel = await UserModel.create(userModel);
  return newUserModel;
};

const getAllUserModels = async () => {
  const userModels = await UserModel.find();
  return userModels;
};

module.exports = { getAllUserModels, createUserModel };
