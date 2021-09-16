const httpStatus = require('http-status');
const { ProductRepository } = require('../repositories');
const ApiError = require('../utils/ApiError');

const getProducts = async () => ProductRepository.getProducts();

const saveProductReview = async ({ reviewerName, reviewText, rating, productId }) => {
  const { product } = await ProductRepository.getProductById({ id: productId });
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  await ProductRepository.saveProductReview({ reviewerName, reviewText, rating, productId });
};

module.exports = {
  getProducts,
  saveProductReview,
};
