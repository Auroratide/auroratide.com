const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [
        path.resolve(__dirname, 'src', 'client', 'styles'),
        path.resolve(__dirname, 'src', 'client', 'components')
      ]
    }),
    require('postcss-mixins'),
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'custom-properties': {
          preserve: false  // without this, css variables become global and step on each other
        },
        'color-mod-function': {}
      }
    })
  ]
};