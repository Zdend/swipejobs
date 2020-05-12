/* eslint-disable import/no-extraneous-dependencies */
const {
  override,
  addBabelPlugins,
  addBabelPreset,
  removeModuleScopePlugin
} = require('customize-cra');
/* eslint-enable import/no-extraneous-dependencies */
const { babelPluginModuleResolverConfig } = require('./config');

module.exports = override(
  removeModuleScopePlugin(),
  ...addBabelPlugins('emotion', ['babel-plugin-module-resolver', babelPluginModuleResolverConfig]),
  addBabelPreset('@emotion/babel-preset-css-prop')
);
