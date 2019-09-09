var express = require('express');
var app = express();
var path = require("path");
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
// var http = require('http');
// var fs = require('fs');
// var nodemailer = require("nodemailer");
// var xoauth2 = require('xoauth2');
var cors = require('cors');
// var swal = require('sweetalert');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))



app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);


app.get('/', function(req, res) {
    // console.log("started");
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});




// ====contact form data route here=========

var urlcontact = "mongodb://p4p:p4p1500@ds213968.mlab.com:13968/p4p"

app.post('/contactform', function(req, res) {

    // console.log(req.body);
    // console.log("@");

    obj = {};
    obj.name = req.body.name;
    obj.email = req.body.email;
    obj.message = req.body.message;
    obj.subject = req.body.subject;
    obj.contact = req.body.contact;

    MongoClient.connect(urlcontact, function(err, db) {
        // console.log("1");
        if (err) throw err;

        var dbo = db.db("p4p");

        dbo.collection("form").insertOne(obj, function(err, res) {
            if (err) throw err;
            // console.log("2");
            // res.json("hi");

        });

        db.close();
    });
    // console.log("3")

})


app.listen(process.env.PORT || 3000);
// console.log("running");