var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

// read
router.get('/', function(req, res) {

  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    }
    res.render('index', hbsObject);
  });
});

// read
router.get('/api/burger', function(req, res) {

  burger.all(function(data) {
    var jsonObject = {
      burgers: data
    }
    res.json(jsonObject);
  });
});

// create
router.post('/api/burger', function(req, res) {

  burger.insert(['burger_name', 'devoured'], [req.body.burger_name, false],
    function(data) {
      res.json({
        id: data.insertId
      });
    });
});

// update
router.put('/api/burger/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  var updateCols = {devoured: true}

  burger.update(updateCols, condition, function(data) {

    if (data.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();  
    }
  });
});

router.delete("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
