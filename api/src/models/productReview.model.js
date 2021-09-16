const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductReviewSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  reviewerName: { type: String, required: true },
  reviewText: { type: String },
  rating: { type: Number, integer: true, required: true, min: 1, max: 5 },
});

const ProductReview = mongoose.model('ProductReview', ProductReviewSchema);

module.exports = ProductReview;
