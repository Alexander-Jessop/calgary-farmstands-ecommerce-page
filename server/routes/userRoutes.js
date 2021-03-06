const express = require("express");
const router = express.Router();
const debug = require("debug")("server:routes");
const {
  createUserModel,
  getAllUserModels,
} = require("../db/model/userModel.js");

router.get("/", async (req, res) => {
  try {
    debug("getting all userModel");
    const userModels = await getAllUserModels();
    res.send(userModels);
  } catch (err) {
    debug(err.message);
  }
});

router.post("/sign-up", async (req, res) => {
  const newUserModel = req.body;
  debug(`adding new userModel: ${newUserModel.firstName}`);
  try {
    const addedUserModel = await createUserModel(newUserModel);
    debug(
      `added new userModel: ${addedUserModel.firstName} with _id ${addedUserModel._id}`
    );
    res.send(addedUserModel);
  } catch (err) {
    debug(`failed to add new userModel: ${newUserModel.firstName}`);
    debug(err.message);
  }
});

module.exports = router;
