const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  name: 'client',
  mode: 'development',
  entry: path.join(__dirname, 'src', 'client', 'client.jsx'),
  output: {
    filename: 'client.js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      Client: path.resolve(__dirname, 'src', 'client'),
      Content: path.resolve(__dirname, 'src', 'content'),
      Test: path.resolve(__dirname, 'test')
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