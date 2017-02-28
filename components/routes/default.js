const express = require('express')

const api = express.Router()

api
        .get('/hello', (req, res) => {
          res.send('hello')
        })

module.exports = api
