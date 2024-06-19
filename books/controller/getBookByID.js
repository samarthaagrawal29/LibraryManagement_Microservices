const mongoose = require('mongoose');
require('../bookModel');
const Book = mongoose.model('Book');

//Controller to get Book by ID
const getBookByID = async (req, res, next) => {
    const { id } = req.query;
    if (!id) {
        res.status(404).send("Book Id Doesn't Exist's");
    }
    try {
        let book = await Book.findById(`${id}`);
        if (book) {
            res.json(book);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.log(error);
    res.send("Something Went Wrong Try fter Sometime!!")
    }
}

module.exports = {
    getBookByID
}