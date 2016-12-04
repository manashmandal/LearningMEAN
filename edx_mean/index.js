// var mongodb = require('mongodb');

// var uri = 'mongodb://localhost:27017/example';

// mongodb.MongoClient.connect(uri, function(error, db) {
//     if (error) {
//         console.log(error);
//         process.exit(1);
//     }

//     db.collection('sample').insert({ x: 1 }, function(error, result) {
//         if (error) {
//             console.log(error);
//             process.exit(1);
//         }

//         db.collection('sample').find().toArray(function(error, docs) {
//             if (error) {
//                 console.log(error);
//                 process.exit(1);
//             }

//             console.log('FOund docs: ');
//             docs.forEach(function(doc) {
//                 console.log(JSON.stringify(doc));
//             });
//             process.exit(0);
//         });
//     });
// });

// var fn = require('./myfile.js');

// fn();

// var otherFn = require('./test').other;
// otherFn();

var assert = require('assert');

describe('my feature', function() {
    it('works', function() {
        assert.equal('A', 'A');
    });

    it('fails gracefully', function() {
        assert.throws(function() {
            throw 'Error';
        });
    });
});

describe('my other feature', function() {
    it('async', function(done) {
        setTimeout(function() {
            done();
        }, 25);
    });
});