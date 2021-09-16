module.exports = {
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:security/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
};
