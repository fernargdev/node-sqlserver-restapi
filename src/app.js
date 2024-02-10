const express = require('express')
const app = express()

const productsRoutes = require('./routes/products.routes')

app.use(productsRoutes)

module.exports = app
