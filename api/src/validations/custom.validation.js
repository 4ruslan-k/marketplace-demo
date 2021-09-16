const mongoose = require('mongoose');

const objectId = (value, helpers) => {
  if (!mongoose.isValidObjectId(value)) {
    return helpers.message('"{{#label}}" must be a valid ObjectId');
  }
  return value;
};

module.exports = {
  objectId,
};
