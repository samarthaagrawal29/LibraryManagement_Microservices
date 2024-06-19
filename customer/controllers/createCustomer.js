//Load Model
require("../customerModel");
const mongoose = require("mongoose");
const Customer = mongoose.model("Customer");

const createCustomer = async (req, res, next) => {
  const { name, age, address } = req.body;
  if (!name || !age || !address) {
    res
      .status(404)
      .send("Some Details is Missing, please fill All the details!");
  }
  try {
    const newCustomer = {
        name: name,
        age: age,
        address: address
    }
    const customer = new Customer(newCustomer);
    const response = await customer.save();
    if (response) {
        res.status(201).json(response);
    } else {
        res.status(500).send("Somthing Went Wrong!!");
    }
  } catch (error) {
    console.log("Some Error occur in Create Customer Fuction");
    res.status(500).send("Somthing Went Wrong please try Again Later!!");
  }
};

module.exports.createCustomer = createCustomer;
