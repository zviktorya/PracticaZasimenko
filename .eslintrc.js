module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-prototype-builtins': 'off'
  },
  "overrides": [
    {
      "files": [
        "**/*.test.js",
      ],
      "env": {
        "jest": true
      }
    }
  ]
};
