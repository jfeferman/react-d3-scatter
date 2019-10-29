module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'import/no-unresolved': 0,
    'semi': 'off',
    "react/jsx-filename-extension": [0],
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off"
  },
  env: {
    jest: true
  }
};
