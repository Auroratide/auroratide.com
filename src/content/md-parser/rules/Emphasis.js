const Rule = require('./Rule');

module.exports = class Emphasis extends Rule {
  constructor() {
    super(/^_(.*)_/);
  }

  produce() {
    return {
      c: 'em',
      d: this.match[1]
    };
  }
};