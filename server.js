var router = require('controllers/buergers_controller.js');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(router);

// still need handlebars stuff. Test up to this point

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
