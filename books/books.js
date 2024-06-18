//Load Express
const express = require("express");
const app = express();
const router = require('./routes');
const bodyPraser = require("body-parser");


//Load Mongoose
const mongoose = require("mongoose");

//connect mongoose
try {
  mongoose.connect(
    `mongodb://localhost:27017/books`
  );
  console.log("MongoDB Connected Successfully");
} catch (error) {
  console.log("Error in Mongo Connection");
}

app.use(bodyPraser.json());
app.use("/api", router);

app.get("/", (req, res, next) => {
  res.send("This is our Main Home Page");
  next();
});

app.listen(1001, () => {
  console.log(`The Server is Up - This is our Book Service`);
});
