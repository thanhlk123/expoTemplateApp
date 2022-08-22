module.exports = {
  extends: 'universe/native',
  env: {
    browser: true,
    node: true,
  },
  globals: {
    __DEV__: true,
  },
  rules: {
    'import/order': 'off',
  },
};
