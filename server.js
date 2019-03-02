var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var burgerController = require("./controllers/burgers_controller");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use("/", burgerController);

app.listen(PORT, function() {
    console.log("connected on: " + PORT);
});