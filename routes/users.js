var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient

router.get('/', function (req, res, next) {

  mongoClient.connect('mongodb://localhost:27017', function (err, db) {
    if (err) throw err

    db.collection('users').find().toArray(function (err, result) {
      if (err) throw err

      res.send(result);
    })
  })

});

router.post('/', function (req, res, next) {

  mongoClient.connect('mongodb://localhost:27017', function (err, db) {
    if (err) throw err

    db.collection('users').insert({
      name: req.body.name
    });
  })

  res.send();

});

router.delete('/', function (req, res, next) {
  
    mongoClient.connect('mongodb://localhost:27017', function (err, db) {
      if (err) throw err
  
      db.collection('users').deleteOne({name : req.body.name});
    })
  
    res.send();
  
  });

module.exports = router;