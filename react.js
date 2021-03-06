module.exports = {
  extends: [
    'plugin:react/recommended',
  ],
  plugins: ['react', 'react-hook'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.tsx'],
    }],
  },
};
