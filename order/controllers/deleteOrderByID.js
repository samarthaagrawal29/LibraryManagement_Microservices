//Load Model
require('../orderModel');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

const deleteOrderByID = async (req, res, next) => {
    const { id } = req.query;
  if (!id) {
    res.status(401).send("Order ID is not available!");
  }
  try {
    const response = await Order.findByIdAndDelete(`${id}`);
    if (response) {
      res.send("Order Deleted Successfully !!");
    } else {
      res
        .status(401)
        .send(
          "Soemthing Went Wrong While Deleting the Order Data Please try again later!!"
        );
    }
  } catch (error) {
    console.log("Something Wrong In Delete Order By ID Controller");
  }
}

module.exports.deleteOrderByID = deleteOrderByID;