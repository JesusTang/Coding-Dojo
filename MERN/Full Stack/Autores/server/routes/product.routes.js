const ProductController = require('../controllers/product.controller');
const express = require('express')

const router = express.Router()

router.get('/api/products', ProductController.getAllProducts);
router.get('/api/products/:id', ProductController.getOneProduct);
router.delete('/api/products/:id/delete', ProductController.deleteProduct);
router.put('/api/products/:id/edit', ProductController.editProduct);
router.post('/api/products', ProductController.createProduct)

module.exports = router