const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const bcrypt = require("bcryptjs");


const mongoose = require("mongoose");
const FarmerModel = require("../db/model/farmerModel");

//Farm user register
router.post("/", async (req, res) => {
  const { fullName, username, password, passwordConfirm, phone, email, businessname, address } = req.body;
  console.log(req.body);
  //Verification that farmer registration is valid
  if (!fullName || !username || !password || !passwordConfirm || !email || !businessname)
    return res.status(400).json({ error: "Please fill out all fields" });
  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters long" });
  } else if (password !== passwordConfirm) {
    return res.status(400).json({ error: "Passwords do not match" });
  };
  const existingFarmer = await FarmerModel.findOne({ fullName, username });
  if (existingFarmer) {
    return res.status(400).json({ error: "Name or username aready exists" });
  }
  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);
  console.log(passwordHash);
  //Save a new farmer to the database
  const newFarmer = new FarmerModel({
    fullName,
    username,
    passwordHash,
    phone,
    email,
    businessname,
    address,
  });
  const savedFarmer = await newFarmer.save();
  console.log(`Saved farmer: ${savedFarmer} with id: ${savedFarmer._id}`);
});


module.exports = router;
