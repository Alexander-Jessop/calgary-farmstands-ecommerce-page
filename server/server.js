const express = require("express");
const logger = require("morgan");
const app = express();
const axios = require("axios");
//REQUIRES^
// app.use(logger("dev"));

app.get("/", async (req, res) => {
  res.send("Hello Team!");
});

app.get("/api", async (req, res) => {
  let farmStandApi = await axios.get(
    "https://data.calgary.ca/resource/ipm6-y48y.json"
  );

  let array = [];
  for (let i = 0; i < farmStandApi.data.length; i++) {
    array.push(farmStandApi.data[i]);
    for (let j = 0; j < array.length; j++) {
      array[j].images = `./images/pictures/${j}.jpg`;
    }
  }

  res.send(array);
});

app.listen(5000, (err) => {
  console.log("listening on port 5000");
});
