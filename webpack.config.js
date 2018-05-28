const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'source');

module.exports = {
  // mode: 'development',
  entry: path.join(APP_DIR, 'index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        }
      },
      // {
      //   test: /\.scss$/,
      //   loaders: ['style-loader', 'css-loader?url=false', 'sass-loader', 'postcss-loader']
      // },
      // {
      //   test: /\.css$/,
      //   loaders: ['style-loader', 'css-loader?url=false', 'postcss-loader']
      // }
    ]
  },
}
