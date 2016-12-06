var express = require('express');
var app = express();
// var eon = require('eon');
// var PubNub = require('pubnub');

var data = [];
var temp_data = {};


// var pubnub = new PubNub({
//   publish_key: 'pub-c-3cfe96eb-4ce9-4cc8-b36e-b6a55f8fcc70',
//   subscribe_key: 'sub-c-7a89efca-bb89-11e6-9dca-02ee2ddab7fe',
//   ssl : true,
// });

app.get('/', function(req, res){
  // res.send('Hello world');
  console.log(__dirname + '\\index.html');
  res.sendFile(__dirname + '\\index.html');
});

app.get('/tempsensor/:reading', function(req, res){
  console.log('reading from the temperature sensor: ' + req.params.reading);
  data.push(req.params.reading);
  console.log(data);

  for (var i = 0; i < data.length; i++){
    temp_data["Value" + i] = data[i];
  }
  //
  // eon.chart({
  //   channel : 'temp',
  //   generate: {
  //     bindto: "#chart",
  //   },
  //   pubnub: pubnub
  // });
  //
  // var d = {
  //   eon: {
  //     temp_data
  //   }
  // };


  // var d = {
  //   eon: {
  //     temp_data
  //   }
  // };
  //
  //
  // pubnub.publish({
  //   channel: "tempsensor_data",
  //   message: d
  // });

  res.send('Reading is ' + data);
});


app.listen(80, function(){
  console.log('Listening on port 80');
});
