const express = require('express');

module.exports = (() => {
    let api = express.Router();

    api
        .get("/hello", (req, res) => {
            res.send("hello");
        });

    return api;
})();
