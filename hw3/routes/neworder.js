const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'CHEESECAKE'
});

app.post('/neworder', (req, res) => {
    const { quantity, topping, notes } = req.body;

    // construct the INSERT statement
    const order = {
        ORDERID: Math.floor(Math.random() * 1000000),
        MONTH: 'JANUARY', // hardcoded month
        DAY: 1, // hardcoded day
        QUANTITY: quantity,
        TOPPING: topping,
        NOTES: notes
    };
    const sql = 'INSERT INTO orders SET ?';

    // execute the INSERT statement
    connection.query(sql, order, (err, result) => {
        if (err) {
            console.error('Error adding order to database:', err);
            res.sendStatus(500);
        } else {
            console.log('Order added to database:', order);
            res.sendStatus(200);
        }
    });
});

app.listen(3000, () => console.log('Server listening on port 3000.'));
