var express = require('express');
var app = express();

var data = [];
var temp_data = {};
app.set('view engine', 'jade');
var updated_data = 0;

app.get('/', function(req, res){
  res.render('home', {id: updated_data});
});

app.get('/:id', function(req, res){
  console.log(req.params.id);
  updated_data = req.params.id;
  res.render('home', {id: updated_data});
});

app.get('/tempsensor/:reading', function(req, res){
  console.log('reading from the temperature sensor: ' + req.params.reading);
  data.push(req.params.reading);
  console.log(data);

  for (var i = 0; i < data.length; i++){
    temp_data["Value" + i] = data[i];
  }
  res.send('Reading is ' + data);
});


app.listen(80, function(){
  console.log('Listening on port 80');
});
