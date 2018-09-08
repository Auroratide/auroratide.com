const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      loaders: ExtractTextPlugin.extract( {
        fallback: 'style-loader',
        use: [ {
          loader: 'css-loader',
          options: {
            importLoader: 1,
            modules: true,
            localIdentName: '[local]-[hash:base64:8]'
          }
        }, {
          loader: 'postcss-loader'
        } ]
      } )
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader'
    } ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};