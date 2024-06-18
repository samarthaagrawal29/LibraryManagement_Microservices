//Load Model
const mongoose = require('mongoose');
require('../bookModel');
const Book = mongoose.model('Book');

const createABook = async (req, res, next) => {
  const { title, author, numberOfPages, publisher } = req.body;
  const book = new Book({
    title: title,
    author: author,
    numberOfPages: numberOfPages,
    publisher: publisher
  });

  book.save().then(() => {
    console.log("Book Created Successfully!!");
    res.send("Book Created Successfully!!");
  }).catch((err) => {
    if (err) {
        res.send("Something Went Wrong!!");
        throw(err);
    }
  })
};

module.exports = {
  createABook,
};
