var express = require('express');
var app = express();

var index_filepath = __dirname + '/public/index.html';

app.get('/', function (req, res) {
    console.log(index_filepath);
    res.sendFile(index_filepath);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});