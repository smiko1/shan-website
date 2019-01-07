var mysql = require('mysql');
var express = require('express');
var app = express();
var server = null;

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "???",
    database: "subscription"
});

app.post('/subscribe', function (req, res) {

    var name = req.body.name;
    var email = req.body.email;

    res.write('You sent the name "' + req.body.name + '".\n');
    res.write('You sent the email "' + req.body.email + '".\n');

    conn.connect(function (err) {
        if (err)
            throw err;
        var sql = "INSERT INTO form (fname, lname, company, email, contact) VALUES (?,?)";

        conn.query(sql, [name, email], function (err, data) {
            if (err) {
                throw err;
            } else {
                console.log("1 record inserted");
                res.end();
            }
        });
    });
});