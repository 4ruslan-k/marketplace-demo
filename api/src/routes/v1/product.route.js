const express = require('express');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router.route('/').get(productController.getProducts);

router.route('/:productId/reviews').post(validate(productValidation.addProductReview), productController.addProductReview);

module.exports = router;
