var router     = require('./controllers/burgers_controller.js');
var exphbs     = require("express-handlebars");
var bodyParser = require('body-parser');
var express    = require('express');

const PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(router);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
