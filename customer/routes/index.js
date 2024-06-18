const { createCustomer, listOfCustomer, getCustomerByID, deleteCustomerByID } = require('../controllers');

const router = require('express').Router();

router.post('/createCustomer', createCustomer);
router.get('/listOfCustomer', listOfCustomer);
router.get('/getCustomerByID', getCustomerByID);
router.delete('/deleteCustomerByID', deleteCustomerByID)

module.exports = router;