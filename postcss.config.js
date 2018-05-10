const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [path.resolve(__dirname, 'src', 'client', 'styles')]
    }),
    require('postcss-cssnext')
  ]
};