module.exports = {
  plugins: ['react', '@connexta/connexta'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  globals: {
    "define": "writable",
  },
  env: {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'no-console': 'off',
    '@connexta/connexta/no-absolute-path-references': 2,
  }
}
