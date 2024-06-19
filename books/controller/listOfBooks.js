//Load Model
const mongoose = require('mongoose');
require('../bookModel');
const Book = mongoose.model('Book');

const listOfBooks = async (req, res, next) => {
  try {
    let books = await Book.find();
    if(books) {
        res.json(books)
    } else {
        res.send("No Book Available at the moment!");
    }
  } catch (error) {
    res.send("Something Went Wrong Try after Sometime!!")
  }  
};

module.exports = {
    listOfBooks,
};
