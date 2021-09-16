const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  thumbnailUrl: { type: String },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
