var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');


var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/flight', routes.flight);
app.get('/flight_next', routes.flight_next);
app.get('/flight_prev', routes.flight_prev);


http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
})