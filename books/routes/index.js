const router = require("express").Router();
const { createABook, listOfBooks, getBookByID, deleteBookByID } = require("../controller");

router.get("/", (req, res, next) => {
  console.log("Router Working");
  next();
});

router.post("/createABook", createABook);
router.get("/getBooks", listOfBooks);
router.get("/getBookByID", getBookByID);
router.delete("/deleteBookByID", deleteBookByID)

module.exports = router;
