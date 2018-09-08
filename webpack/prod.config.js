const merge = require('webpack-merge');
const base = require('./base.config');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new OptimizeCssAssetsPlugin({})
  ]
});