const Rule = require('./Rule');

module.exports = class Heading extends Rule {
  constructor() {
    super(/^(#{1,6})\s(.*)/);
  }

  produce() {
    return {
      c: `h${this.match[1].length}`,
      d: this.match[2]
    };
  }
};