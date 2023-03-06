var express = require('express');
var router = express.Router();
var dbms = require('./dbms.js');
const cors = require('cors');
router.use(cors());

/* post JSON array */
router.post('/', function (req, res, next) {
    console.log("parsing data");
    var quantity = req.body.quantity;
    var topping = req.body.topping;
    var notes = req.body.notes;
    var orderid = 99;
    var month = 'MAR';
    var day = 1;
    var order = {
        "orderid": orderid,
        "month": month,
        "day": day,
        "topping": topping,
        "quantity": quantity,
        "notes": notes
    };


    dbms.dbinsert(order, function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send('Error adding order to database');
        } else {
            console.log("Success!");
            res.status(200).send('Order added to database');
        }
    });
});

module.exports = router;



