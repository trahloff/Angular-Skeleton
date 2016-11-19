// @flow
'use strict';
var exampleModule = require('./server/components/exampleModule.js'),
    express = require('express'),
    app = express(),
    colors = require('colors'),
    path = require('path'),
    http = require('http');


app
    .use(express.static(path.join(__dirname, '../', '/public')))
    .use('/', require('./server/routes/default'))
    .use('/bower_components', express.static(path.join(__dirname, '../', '/bower_components')));

var server = http.createServer(app).listen(7777);
console.log("Please open your favorite browser and go to " + "localhost:7777".green);
exampleModule.say("heyho");
