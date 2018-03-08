var express = require('express');
var burger = require('../models/burger.js');

var router = express.router();

// read
router.get('/', function(req, res) {
  // get static page.
  // get data from database

});

// create
router.post('/api/burger/:burger?', function(req, res) {

});

// update
router.post('/api/burger', function(req, res) {

});
