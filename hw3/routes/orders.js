var express = require('express');
var router = express.Router();

var orders = {
    data: [
        {
            "topping": "plain",
            "quanitity": 1,
        },
        {
            "topping": "chcolate",
            "quanitity": 2,
        }, {
            "topping": "cherry",
            "quanitity": 3,
        }
    ]
};
var myJSON = JSON.stringify(orders);

/* post JSON array */
router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(myJSON);
});

router.post('/', function (req, res, next) {
    res.send(myJSON);
});


module.exports = router;
