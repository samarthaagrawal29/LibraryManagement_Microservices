const router = require("express").Router();
const { createABook, listOfBooks, getBookByID, deleteBookByID } = require("../controller");

router.post("/createABook", createABook);
router.get("/getBooks", listOfBooks);
router.get("/getBookByID", getBookByID);
router.delete("/deleteBookByID", deleteBookByID)

module.exports = router;
