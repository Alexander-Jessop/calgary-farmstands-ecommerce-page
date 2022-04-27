const express = require("express");
const logger = require("morgan");
const app = express();
const axios = require("axios");
const mongoose = require("./db/mongoose");
const cookieParser = require("cookie-parser");
// app.use(logger("dev"));

const farmerLogin = require("./routes/farmerRoutes");
const farmerInventory = require("./routes/farmerInventory")
const userRouter= require("./routes/userRoutes")
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/sign-in", farmerLogin);
app.use("/users", userRouter);
app.use("/inventory", farmerInventory);

app.use(cookieParser());

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
  }
  for (let j = 0; j < array.length; j++) {
    array[j].images = `./images/pictures/${j}.jpg`;
  }
  for (let k = 0; k < array.length; k++) {
    array[k].id = `${k}`;
  }

  res.send(array);
});

app.get("/api/:id", async (req, res) => {
  let id = req.params.id;

  let farmStandApi = await axios.get(
    "https://data.calgary.ca/resource/ipm6-y48y.json"
  );
  let array = [];
  for (let i = 0; i < farmStandApi.data.length; i++) {
    array.push(farmStandApi.data[i]);
  }
  for (let j = 0; j < array.length; j++) {
    array[j].images = `.././images/pictures/${j}.jpg`;
  }

  res.send(array[id]);
});

app.listen(5000, (err) => {
  console.log("listening on port 5000");
});
