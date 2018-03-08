var express = require('express');
var burger = require('../models/burger.js');

var router = express.router();

// read
router.get('/', function(req, res) {

  burger.all(function(data) {
    var hbsObject = {
      burgers: data;
    }
  });

  res.render('index', hbsObject);

});

// create
router.post('/api/burger', function(req, res) {

  burger.insert(['burger_name', 'devoured'], [req.body.burger_name, false],
    function(data) {
      res.json({id: data.insertId});
    });
});

// update
router.put('/api/burger/:id', function(req, res) {

  var condition = 'id = ' + req.params.id;
  var updateCols = {
    name: res.body.name;
  }

  burger.update(updateCols, condition, function(data) {

    if (data.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

module.exports = router;
