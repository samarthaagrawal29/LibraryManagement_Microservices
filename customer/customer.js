//Load Express
const express = require("express");
const app = express();
const router = require('./routes');
const bodyPraser = require("body-parser");


//Load Mongoose
const mongoose = require("mongoose");

//connect mngoose
try {
  mongoose.connect(
    `mongodb://localhost:27017/customer`
  );
  console.log("MongoDB Connected Successfully");
} catch (error) {
  console.log("Error in Mongo Connection");
}

app.use(bodyPraser.json());
app.use("/api", router);

app.get("/", (req, res, next) => {
  res.send("This is our Customer Home Page");
  next();
});

app.listen(1002, () => {
  console.log(`The Server is Up - This is our Customer Service`);
});
