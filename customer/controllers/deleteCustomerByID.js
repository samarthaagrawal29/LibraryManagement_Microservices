//Load Model
require("../customerModel");
const mongoose = require("mongoose");
const Customer = mongoose.model("Customer");

const deleteCustomerByID = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    res.status(401).send("Customer ID is not available!");
  }
  try {
    const response = await Customer.findByIdAndDelete(`${id}`);
    if (response) {
      res.send("Customer Data Deleted Successfully !!");
    } else {
      res
        .status(401)
        .send(
          "Soemthing Went Wrong While Deleting the Customer Data Please try again later!!"
        );
    }
  } catch (error) {
    console.log("Something Wrong In Delete Customer By ID Controller");
  }
};

module.exports.deleteCustomerByID = deleteCustomerByID;
