const { createOrder } = require('../controllers');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
    res.send("Hello From Order page");
    return next();
});

router.post('/createOrder', createOrder)

module.exports = router;