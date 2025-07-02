const express = require('express')
const { createCategory , createProduct } = require('../controllers/productcontroller')
const router = express.Router()

router.post("/addcategory",createCategory)
router.post("/add",createProduct)



module.exports = router