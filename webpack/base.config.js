const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const __root = path.resolve(__dirname, '..');

module.exports = {
  name: 'client',
  entry: path.join(__root, 'src', 'client', 'client.jsx'),
  output: {
    filename: 'client.js',
    path: path.join(__root, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      Client: path.resolve(__root, 'src', 'client'),
      Content: path.resolve(__root, 'src', 'content'),
      Test: path.resolve(__root, 'test')
    }
  },
  module: {
    rules: [ {
      test: /\.css$/,
      use: [ {
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          importLoader: 1,
          modules: true,
          localIdentName: '[local]-[hash:base64:8]'
        }
      }, {
        loader: 'postcss-loader'
      } ]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    } ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};