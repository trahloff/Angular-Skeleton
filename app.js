var exampleModule = new(require('./server/components/exampleModule.js')),
    express = require('express'),
    app = express(),
    colors = require('colors'),
    freeport = require('freeport'),
    http = require('http'),
    io = require('socket.io');


app
    .use(express.static(__dirname + '/public'))
    .use('/bower_components', express.static(__dirname + '/bower_components'))
    .use('/public', express.static(__dirname + '/public'));


var server = http.createServer(app).listen(7777);
console.log("Please open your favorite browser and go to " + "localhost:7777".green);

exampleModule.sayHi();
