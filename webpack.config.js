const path = require('path');

module.exports = {
  name: 'js',
  mode: 'development',
  entry: path.join(__dirname, 'src', 'client', 'index.jsx'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Client: path.resolve(__dirname, 'src', 'client'),
      Test: path.resolve(__dirname, 'test')
    }
  },
  module: {
    rules: [ {
      test: /\.jsx?$/,
      loader: 'babel-loader'
    } ]
  }
};