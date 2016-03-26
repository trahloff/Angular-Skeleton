// This application uses express as its web server
var express = require('express');
var http = require('http');
var cfenv = require('cfenv'); //cloud foundry environment
var appEnv = cfenv.getAppEnv(); // get the app environment from Cloud Foundry
var bodyParser = require('body-parser');
var colors = require('colors');
var uuid = require('node-uuid');

// create a new express server
var app = express();
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/client', express.static(__dirname + '/client'));

var port = appEnv.port || 7777;

var server = http.createServer(app).listen(port);

console.log("[INIT]".green + "express starting on: " + port);

var routes = require('./service/routes/defaultRoutes');
app.use('/', routes);
