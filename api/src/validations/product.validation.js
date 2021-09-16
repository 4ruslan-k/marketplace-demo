const Joi = require('joi');
const { objectId } = require('./custom.validation');

const addProductReview = {
  params: Joi.object().keys({
    productId: Joi.string().required().custom(objectId),
  }),
  body: Joi.object().keys({
    reviewerName: Joi.string().required(),
    rating: Joi.number().integer().min(1).max(5).required(),
    reviewText: Joi.string().optional().allow(''),
  }),
};

module.exports = {
  addProductReview,
};
