require('dotenv').config();

const { NODE_ENV, MONGODB_URI, PORT, APP_URL } = process.env;

module.exports = {
  env: NODE_ENV,
  port: PORT,
  APP_URL,
  MONGODB_URI,
};
