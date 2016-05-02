var Flight  = require('../flight');


var flight = new Flight();

flight.setOrigin('Dhaka');
flight.setDestination('Khulno');
flight.setNumber(100);

var flight_next = new Flight();

flight_next.setOrigin('Khulno');
flight_next.setDestination('Dhk');
flight_next.setNumber(200);

var flight_prev = new Flight();
flight_prev.setOrigin('Bal');
flight_prev.setDestination('Sal');
flight_prev.setNumber(300);

exports.flight = function (req, res){
    res.json(flight.getInfo());
};

exports.flight_next = function(req, res){
    res.json(flight_next.getInfo());
};

exports.flight_prev = function(req, res){
    res.json(flight_prev.getInfo());
};





