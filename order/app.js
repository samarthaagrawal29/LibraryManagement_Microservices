const express = require("express");
const app = express();
const router = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use("/api", router);

try {
    mongoose.connect(`mongodb+srv://agrawalsamarth2903:L5t4KZJnG4sXKJTG@cluster0.qlfz9ef.mongodb.net/order?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("MongoDB Connected Successfully");
} catch (error) {
    console.log("Error in Mongo Connection");
}

app.listen(4003, () => {
    console.log(`The Server is Up - This is our Order Service`);
});