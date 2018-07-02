const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [
        path.resolve(__dirname, 'src', 'client', 'styles'),
        path.resolve(__dirname, 'src', 'client', 'components')
      ]
    }),
    require('postcss-cssnext')
  ]
};