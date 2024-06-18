const { createOrder, deleteOrderByID, getOrderByID, listOfOrder } = require('../controllers');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
    res.send("Hello From Order page");
    return next();
});

router.post('/createOrder', createOrder);
router.get('/listOfOrder', listOfOrder);
router.get('/getOrderByID', getOrderByID);
router.delete('/deleteOrderByID', deleteOrderByID);


module.exports = router;