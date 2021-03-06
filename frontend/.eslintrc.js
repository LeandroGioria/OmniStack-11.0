module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-base',
   	'prettier',
		'prettier/react',
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
    'import',
    'jsx-a11y'
  ],
  rules: {
    "prettier/prettier": "error",
        "react/jsx-filename-extension": ['error', { extensions: ['.jsx', '.js'] }],
        "import/prefer-default-export": 'off',
        "no-unused-vars":["error", { argsIgnorePattern:"^_" }],
        "react/jsx-one-expression-per-line": "off",
        "global-require": "off",
        "react-native/no-raw-text": "off",
        "no-param-reassign": "off",
        "no-underscore-dangle": "off",
        camelcase: "off",
        "no-console": ["error", { allow: ["tron"] }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
  },
};
