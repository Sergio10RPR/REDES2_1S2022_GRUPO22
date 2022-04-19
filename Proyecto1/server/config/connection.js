var mysql = require('mysql');
const dotenv = require('dotenv').config();

var connection = mysql.createConnection({
    host: process.env.EC2AWS_MYSQL_HOSTNAME,
    user: process.env.EC2AWS_MYSQL_USERNAME,
    password: process.env.EC2AWS_MYSQL_PASSWORD,
    port: process.env.EC2AWS_MYSQL_PORT,
    database: process.env.EC2AWS_MYSQL_DATABASE
});

connection.connect(function (err) {
    console.log(' ->Connecting to database...')
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log(' ->Connected to database!');
});




exports.connection = connection;