const withFonts = require('next-fonts');
module.exports = withFonts({
  webpack(config) {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
});
