var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var routes = require("./controllers/burgers_controller.js");

var app = express();

var bodyParser = require("body-parser");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(routes);

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.listen(PORT, function() {
    console.log("listening on port " + PORT);
});