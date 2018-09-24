const Rule = require('./Rule');

module.exports = class Paragraph extends Rule {
  constructor() {
    super(/^([^\n\r]+)(\r?\n\r?\n)?/);
  }

  produce() {
    return {
      c: 'p',
      d: this.match[1]
    };
  }
};