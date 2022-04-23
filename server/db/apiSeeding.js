const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const axios = require("axios");

const Inventory = require("../db/model/farmInventory");
const { json } = require("express/lib/response");

let saveCounter = 0;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });

const farmStandApi = ["https://data.calgary.ca/resource/ipm6-y48y.json"];

farmStandApi.map(async (farmStandApi) => {
  try {
    const response = await axios.get(farmStandApi);
    console.log(response.data);
    const data = await response.data;
    console.log("farmStandData is:" + data);
      const resultData = [...data];
//iterate through the data and create a new document for each item
    for (let i = 0; i < resultData.length; i++) {
      let inventory = new Inventory({
        hours: resultData[i].hours,
        vendor_name: resultData[i].vendor_name,
        product_description: resultData[i].product_description,
      });

      inventory.save(() => {
        console.log(`saved inventory items:`, inventory);
        saveCounter++;
        if (saveCounter === resultData.length) {
          mongoose
            .disconnect(process.env.MONGO_URL)
            .then(() => {
              console.log(
                "Saved farm information and disconnected from MongoDB"
              );
            })
            .catch((err) => {
              console.log("Error disconnecting from MongoDB: ", err);
            });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});
