const router = require('express').Router()

const { getProducts } = require('../controllers/products.controller')

router.get('/products', getProducts)

router.get('/products/:id')

router.post('/products')

router.delete('/products')

router.put('/products')

module.exports = router
