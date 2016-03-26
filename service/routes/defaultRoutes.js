var express = require('express');

module.exports = (function() {
  'use strict';
  var api = express.Router();

  api.get('/heyho', function(req, res) {
      res.send("heyho");
    });


  return api;
})();
