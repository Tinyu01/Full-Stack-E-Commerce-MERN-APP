const express = require('express')
const router = express.Router()

// Import product controllers
const getProduct = require('../controller/product/getProduct')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getCategoryProductOne = require('../controller/product/getCategoryProductOne')
const getProductDetails = require('../controller/product/getProductDetails')
const searchProduct = require('../controller/product/searchProduct')
const filterProduct = require('../controller/product/filterProduct')
const uploadProduct = require('../controller/product/uploadProduct')
const updateProduct = require('../controller/product/updateProduct')

// Product routes
router.get('/products', getProduct)
router.post('/category-wise/product', getCategoryWiseProduct)
router.get('/category-product', getCategoryProductOne)
router.post('/product-details', getProductDetails)
router.get('/search/product', searchProduct)
router.post('/filter-product', filterProduct)
router.post('/upload-product', uploadProduct)
router.put('/update-product', updateProduct)

module.exports = router
