'use strict';
const exampleModule = require('./components/exampleModule.js'),
    config = require('./components/config/express.json'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    http = require('http');


/* -------------------------Express Config------------------------- */
app
    .use(bodyParser.urlencoded({
        'extended': true
    }))
    .use(bodyParser.json());

/* -------------------------Route Definitions------------------------- */
fs.readdirSync('./components/routes').forEach(function(file) {
    app.use('/' + file.replace('.js', ''), require("./components/routes/" + file));
});
app
    .use(express.static(__dirname + '/public'))
    .use('/bower_components', express.static(__dirname + '/bower_components'));

/* -------------------------Error Handling------------------------- */
process
    .on('uncaughtException', function(err) {
        console.error(err);
    })
    .on('warning', function(warning) {
        console.warn(warning);
    });


let port = config.port || 8080;
const server = http.createServer(app).listen(port);
console.log("Please open your favorite browser and go to " + "localhost:" + port);

exampleModule.say("heyho");
