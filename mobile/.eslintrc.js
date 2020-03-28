module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
		'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
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
    'jsx-a11y',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    "prettier/prettier": "error",
				"import/prefer-default-export": 'off',
				"react/jsx-filename-extension": ['warn', { extensions: ['.jsx', '.js'] }],
				camelcase: "off",
				"react/jsx-one-expression-per-line": "off",
				"no-param-reassign": "off",
				"no-unused-vars":["error", { argsIgnorePattern:"^_" }],
				"react-hooks/rules-of-hooks": "error",
				"react-hooks/exhaustive-deps": "warn",
				"global-require": "off",
				"react-native/no-raw-text": "off",
				"no-underscore-dangle": "off",
				"no-console": ["error", { allow: ["tron"] }],
        "class-methods-use-this": "off",
        'import-helpers/order-imports': [
          'warn',
          {
              newlinesBetween: 'always', // new line between groups
              groups: [
                  '/^react/',
                  'module',
                  '/^@shared/',
                  ['parent', 'sibling', 'index'],
              ],
              alphabetize: { order: 'asc', ignoreCase: true },
          },
      ],
  },
};
