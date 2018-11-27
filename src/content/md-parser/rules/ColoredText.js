const Rule = require('./Rule');

module.exports = class ColoredText extends Rule {
  constructor() {
    super(/^##([0-9a-fA-F]{6})\|(.*?)##/);
  }

  produce() {
    return {
      c: 'ColoredText',
      d: this.match[2],
      p: {
        color: '#' + this.match[1]
      }
    };
  }
};
