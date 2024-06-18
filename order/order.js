const express = require("express");
const app = express();
const router = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use("/api", router);
//Connect Mongoose
try {
    mongoose.connect(`mongodb://localhost:27017/order`);
    console.log("MongoDB Connected Successfully");
} catch (error) {
    console.log("Error in Mongo Connection");
}

app.listen(1003, () => {
    console.log(`The Server is Up - This is our Order Service`);
});