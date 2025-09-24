const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/weather.html');
});

app.post('/', function (req, res) {
    console.log("Post Works!!!");
});

app.listen(8000, function () {
    console.log("Server started on port 8000!!!");
})