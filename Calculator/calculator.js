//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    // res.send("<h1>This is the calculator</h1>");
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    // console.log(req.body.num1);

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
    // res.send("You pressed the calculate button!!!");

});

app.listen(5000, function () {
    console.log("Server started on port 5000");
});