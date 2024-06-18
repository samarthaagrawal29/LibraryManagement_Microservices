// Axios
const axios = require('axios');
const { ObjectId } = require('mongodb');

//Load Model
require('../orderModel');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

const getOrderByID = async (req, res, next) => {
    const { id } = req.query;
    if (!id) {
        res.status(404).send("Data Missing, Please Provide the ID!!");
        return next();
    }
    try {
        const orderDetails = await Order.findById(`${id}`);
        console.log(orderDetails);
        if (orderDetails) {
            let customerID = orderDetails?.customerID.toHexString();
            let bookID = orderDetails?.bookID.toHexString();
            let bookDetails = (await axios.get(`http://localhost:1001/api/getBookByID?id=${bookID}`)).data;
            let customerDetails = (await axios.get(`http://localhost:1002/api/getCustomerByID?id=${customerID}`))?.data;
            console.log(bookDetails);
            if (bookDetails && customerDetails) {
                const response = {
                    orderID: orderDetails._id,
                    bookDetails: bookDetails,
                    customerDetails: customerDetails,
                    initialDate: orderDetails.initialDate,
                    deliveryDate: orderDetails.deliveryDate
                }
                console.log(response);
                res.status(200).json(response);
                return next();
            } else {
                res.status(404).send("Something Went Wrong - Cutomer ID, Book ID");
                return next();
            }

        } else {
            res.status(404).send("There is No Order Details Available");
            return next();
        }
    } catch (error) {
        console.log("Something Went Wrong in getOrderByID Contrller!!");
        res.status(500).send("Something Went Wrong!!");
        return next();
    }
}

module.exports.getOrderByID = getOrderByID;