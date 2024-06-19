//Load Model
require("../orderModel");
const mongoose = require("mongoose");
const Order = mongoose.model("Order");

const createOrder = async (req, res, next) => {
  const { customerID, bookID, initialDate, deliveryDate } = req.body;
  if (!customerID || !bookID || !initialDate || !deliveryDate) {
    res
      .status(404)
      .send("Some Details is Missing, please fill All the details!");
  }
 
  try {
    const newOrder = {
      customerID: `${customerID}`,
      bookID: `${bookID}`,
      initialDate: initialDate,
      deliveryDate: deliveryDate,
    };
    const order = new Order(newOrder);
    const response = await order.save();
    if (response) {
      res.status(201).json(response);
    } else {
      res.status(500).send("Somthing Went Wrong!!");
    }
  } catch (error) {
    console.log("Some Error occur in Create Order Fuction");
    res.status(500).send("Somthing Went Wrong please try Again Later!!");
  }
};

module.exports.createOrder = createOrder;
