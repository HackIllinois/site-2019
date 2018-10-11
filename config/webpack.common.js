const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIR = path.resolve(__dirname, '..');

const BUILD_DIR = path.resolve(ROOT_DIR, 'build');
const APP_DIR = path.resolve(ROOT_DIR, 'source');
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');

module.exports = {
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
              presets: ['env', 'react', 'flow'],
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
    new CleanWebpackPlugin([BUILD_DIR], { root: ROOT_DIR }),
    new CopyWebpackPlugin([{ from: 'source/public_assets', to: 'assets' }]),
    new FlowWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      favicon: path.resolve(PUBLIC_DIR, 'favicon.ico'),
      template: path.resolve(PUBLIC_DIR, 'index.html'),
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
