module.exports = {
    env: {
      es6: true,
      node: true,
      'jest/globals': true,
    },
    extends: [
      'airbnb-base',
      'prettier',
      'plugin:jest/recommended',
      'plugin:jest/style',
    ],
    plugins: ['prettier', 'jest'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 'error',
      'class-methods-use-this': 'off',
      'no-param-reassign': 'off',
      camelcase: 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
      'no-loop-func': 'off',
      'no-await-in-loop': 'off',
      'no-restricted-syntax': 'off',
      'no-return-assign': 'off',
      'no-continue': 'off',
    },
  };