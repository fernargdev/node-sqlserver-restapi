const express = require('express')
const app = express()

const PORT = process.env.PORT

// settings
app.set('port', PORT || 3003)

module.exports = app
