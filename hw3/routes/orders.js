var express = require('express');
var router = express.Router();
var dbms = require('./dbms.js');
const cors = require('cors');
router.use(cors());
/* post JSON array */
router.post('/', function (req, res, next) {
    //recieves month from client side req
  var month = req.body.month;
    console.log(month);
    //dbquery for req month
    dbms.dbquery("SELECT * FROM ORDERS WHERE MONTH='" + month + "'", function (err, data) {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving orders from database');
    } else {
        //turns data into JSON object, prepares, and sends data client-side
        //console.log(data);
      var orders = { data: [] };
      for (var i = 0; i < data.length; i++) {
        orders.data.push({
          "topping": data[i].TOPPING,
          "quantity": data[i].QUANTITY
        });
        }
        //console.log(orders);
      res.setHeader('Content-Type', 'text/plain');//application/json wasnt working I printed the data to console and decided to use 'text/plain' and it worked
        res.send(JSON.stringify(orders));
        console.log("Success!");
    }
  });
});

module.exports = router;
