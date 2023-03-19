const ProductController = require('../controllers/product.controller');
const express = require('express')

const router = express.Router()

router.get('/api/products', ProductController.getAllProducts);
router.get('/api/products/:id', ProductController.getOneProduct);
router.post('/api/products', ProductController.createProduct)

module.exports = router