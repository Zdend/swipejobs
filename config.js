const babelPluginModuleResolverConfig = {
  root: ['./'],
  alias: {
    '^@/(.+)': './src/\\1'
  },
  extensions: ['.js', '.ts', '.tsx']
};

module.exports = {
  babelPluginModuleResolverConfig
};
