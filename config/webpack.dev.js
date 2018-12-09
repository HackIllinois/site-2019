const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      API_ENDPOINT: '/api',
    }),
  ],
});
