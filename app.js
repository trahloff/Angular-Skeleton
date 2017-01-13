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
    .use(bodyParser.json())
    .use('/', express.static('./public'))
    .use('/node_modules', express.static('./node_modules'));

/* -------------------------Route Definitions------------------------- */
fs
    .readdirSync('./components/routes')
    .forEach(file => {
        app.use('/' + file.replace('.js', ''), require("./components/routes/" + file));
    });


let port = process.env.PORT || config.port || 80;
const server = http.createServer(app).listen(port);
console.log("Please open your favorite browser and go to " + "localhost:" + port);

exampleModule.say("heyho");
