const router = require('express').Router()

const {
  getProducts,
  getAllProductById,
  createdNewProducts,
  deleteProductById,
  getTotalProducts,
  updateProductById,
} = require('../controllers/products.controller')

router.get('/products', getProducts)

router.get('/products/:id', getAllProductById)

router.get('/products/count', getTotalProducts)

router.post('/products', createdNewProducts)

router.delete('/products/:id', deleteProductById)

router.put('/products/:id', updateProductById)

module.exports = router
