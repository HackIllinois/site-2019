const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'source');

module.exports = {
  mode: 'development',
  entry: path.join(APP_DIR, 'index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', APP_DIR],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: APP_DIR,
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
            },
          },
          {
            test: /\.(scss|sass)$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
          },
          {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader'],
          },
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise be processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'source/public_assets', to: 'assets' }]),
    new HtmlWebpackPlugin({
      inject: true,
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
      template: path.resolve(__dirname, 'public', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
};
