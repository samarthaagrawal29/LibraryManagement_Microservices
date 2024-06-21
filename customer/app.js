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
    `mongodb+srv://agrawalsamarth2903:L5t4KZJnG4sXKJTG@cluster0.qlfz9ef.mongodb.net/customer?retryWrites=true&w=majority&appName=Cluster0`
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

app.listen(4002, () => {
  console.log(`The Server is Up - This is our Customer Service`);
});
