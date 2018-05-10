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
  },
  module: {
    rules: [ {
      test: /\.jsx?$/,
      loader: 'babel-loader'
    } ]
  }
};