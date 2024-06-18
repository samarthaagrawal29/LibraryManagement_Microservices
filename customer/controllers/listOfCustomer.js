//Load Model
require("../customerModel");
const mongoose = require("mongoose");
const Customer = mongoose.model("Customer");

const listOfCustomer = async (req, res, next) => {
    try {
        let listOfCustomer = await Customer.find();
        if(listOfCustomer) {
            res.status(200).json(listOfCustomer);
            return next();
        } else {
            res.send("No Customer Data Is Available at this moment!");
            return next();
        }
    } catch (error) {
        console.log("Somthing Went Wrong in - listOfCustomer Funtion");
        res.status(500).send("Somethig Went Wrong!!");
    }
};

module.exports.listOfCustomer = listOfCustomer;