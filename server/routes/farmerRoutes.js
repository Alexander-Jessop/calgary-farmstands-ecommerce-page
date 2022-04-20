const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const mongoose = require("mongoose");
const FarmerModel = require("../db/model/farmerModel");

//Farm user register
router.post("/", async (req, res) => {
  try {
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
    //Use Jsonwebtoken to create a token for the user
    const token = jwt.sign(
      {
        Farmer: savedFarmer._id,
      },
      process.env.JWT_SECRET
    );
    console.log("JSON WEB TOKEN Is:", token)
    //Sign the token and send it as a HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
    }).send();
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  }
});


module.exports = router;
