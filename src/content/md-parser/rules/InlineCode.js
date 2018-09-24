const Rule = require('./Rule');

module.exports = class InlineCode extends Rule {
  constructor() {
    super(/^`([^`]*)`/);
  }

  produce() {
    return {
      c: 'code',
      d: this.match[1]
    };
  }
};