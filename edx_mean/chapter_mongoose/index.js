var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/balu');

var User = mongoose.model('User', schema, 'users');

var user = new User({
    name: 'Manash Mandal',
    email: 'manashmndl@gmail.com'
});

var user2 = new User({
    name: 'Mandal Manash',
    email: 'mandalmanash@gmail.com'
});

user.save(function(error) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
});

user2.save(function(error) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
});

User.find({
    email: 'mandalmanash@gmail.com'
}, function(error, docs) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log(require('util').inspect(docs));
    process.exit(0);
});