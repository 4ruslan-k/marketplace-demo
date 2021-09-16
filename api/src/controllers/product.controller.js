const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');

const getProducts = catchAsync(async (req, res) => {
  const { products } = await productService.getProducts();
  res.send({ products });
});

const addProductReview = catchAsync(async (req, res) => {
  const { rating, reviewerName, reviewText } = req.body;
  const { productId } = req.params;
  await productService.saveProductReview({ rating, reviewerName, reviewText, productId });
  res.sendStatus(httpStatus.CREATED);
});

module.exports = {
  getProducts,
  addProductReview,
};
