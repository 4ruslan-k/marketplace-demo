const mongoose = require('mongoose');
const config = require('./config');
const logger = require('./logger');

const connectToDb = async (callback) => {
  if (!config.MONGODB_URI) throw new Error('Please add MONGODB_URI to .env');
  await mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  logger.info('Successfully connected to MongoDB instance');
  if (callback) callback();
};

module.exports = { connectToDb };
