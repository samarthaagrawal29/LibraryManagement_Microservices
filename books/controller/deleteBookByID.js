//Load Model
const mongoose = require("mongoose");
require("../bookModel");
const Book = mongoose.model("Book");

const deleteBookByID = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    res.status(401).send("Book ID is not available!");
  }
  try {
    const response = await Book.findByIdAndDelete(`${id}`);
    if(response) {
        res.send("Book Deleted Successfully !!");
    } else {
        res.status(401).send("Soemthing Went Wrong While Deleting the book Please try again later!!");
    }
  } catch (error) {
    console.log("Something Wrong In Delete Book By ID Controller");
  }
};

module.exports.deleteBookByID = deleteBookByID