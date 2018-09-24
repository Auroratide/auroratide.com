const Rule = require('./Rule');

module.exports = class Heading extends Rule {
  constructor() {
    super(/^#\s(.*)/);
  }

  produce() {
    return {
      c: 'h1',
      d: this.match[1]
    };
  }
};