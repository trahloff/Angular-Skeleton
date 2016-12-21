'use strict';
const express = require('express');

module.exports = (() => {
    let api = express.Router();

    api
        .get("/whatev", (req, res) => {
            res.send("whatev");
        });

    return api;
})();
