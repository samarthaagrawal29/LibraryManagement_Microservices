//Load Model
require("../customerModel");
const mongoose = require("mongoose");
const Customer = mongoose.model("Customer");


const getCustomerByID = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    res.status(404).send("Customer Id Doesn't Exist's");
  }
  try {
    let customer = await Customer.findById(`${id}`);
    if (customer) {
      res.json(customer);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(
      "Something Went Wrong In getCustomerByID Controller!!",
      error.message
    );
  }
};
module.exports.getCustomerByID = getCustomerByID;
