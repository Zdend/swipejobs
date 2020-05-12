const { babelPluginModuleResolverConfig } = require('./config');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['airbnb-typescript', 'prettier/@typescript-eslint', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    commonjs: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/static-property-placement': 'off',
    'import/prefer-default-export': 'off',
    'no-prototype-builtins': 'off',
    'no-console': 'off'
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': babelPluginModuleResolverConfig
    }
  },
};
  