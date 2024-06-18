//Load Model
require('../orderModel');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

const listOfOrder = async (req, res, next) => {
    try {
        let listOfOrder = await Order.find();
        if(listOfOrder) {
            res.status(200).json(listOfOrder);
            return next();
        } else {
            res.send("No Order Data Is Available at this moment!");
            return next();
        }
    } catch (error) {
        console.log("Somthing Went Wrong in - listOfOrder Funtion");
        res.status(500).send("Somethig Went Wrong!!");
    }
}

module.exports.listOfOrder = listOfOrder;