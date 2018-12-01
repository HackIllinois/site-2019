const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      API_ENDPOINT: 'https://api.hackillinois.org',
    }),
  ],
});
