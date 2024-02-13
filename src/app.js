const express = require('express')
const app = express()

const productsRoutes = require('./routes/products.routes')

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(productsRoutes)

module.exports = app
