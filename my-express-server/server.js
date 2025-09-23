//jshint esversion:6

const express = require('express');
const app = express()

app.get("/", function (request, response) {
    response.send("<h1>Hello World</h1>");
});

app.get("/contact", function (req, res) {
    res.send("<h1>This is our Contact Page</h1>");
});

app.get("/about", function(req, res){
    console.log("I am marshall"); 
    res.send("<h1>I am marshall</h1>");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
