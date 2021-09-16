const { Product, ProductReview } = require('../models');

const createProducts = ({ products }) => Product.insertMany(products);

const getProductById = async ({ id }) => {
  const product = await Product.findById(id);
  return { product };
};

const getProducts = async () => {
  const products = await Product.aggregate()
    .lookup({
      from: 'productreviews',
      localField: '_id',
      foreignField: 'productId',
      as: 'productReviews',
    })
    .project({ averageRating: { $avg: '$productReviews.rating' }, name: 1, description: 1, thumbnailUrl: 1 });
  return { products };
};

const saveProduct = async ({ name, description, thumbnailUrl }) => {
  const product = new Product({ name, description, thumbnailUrl });
  await product.save();
};

const saveProductReview = async ({ reviewerName, reviewText, rating, productId }) => {
  const productReview = new ProductReview({ reviewerName, reviewText, rating, productId });
  await productReview.save();
};

module.exports = {
  createProducts,
  getProductById,
  saveProduct,
  saveProductReview,
  getProducts,
};
