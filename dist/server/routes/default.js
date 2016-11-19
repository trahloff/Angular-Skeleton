'use strict';

var express = require('express');

module.exports = function () {
    'use strict';

    var api = express.Router();

    api.get("/whatev", function (req, res) {
        res.send("whatev");
    });

    return api;
}();