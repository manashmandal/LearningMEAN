var express = require('express');
var app = express();

var index_filepath = __dirname + '/public/index.html';
var data_filepath = __dirname + '/public/rat-data.csv';
var data = require('./public/data.json');

app.get('/', function (req, res) {
    console.log(index_filepath);
    res.sendFile(index_filepath);
});

app.get('/public/rat-data.csv', function (req, res) {
    res.attachment(data_filepath);
    res.sendFile(data_filepath);
});

app.get('/public/data', function (req, res) {
    res.send(data);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});