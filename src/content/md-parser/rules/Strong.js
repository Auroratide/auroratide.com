const Rule = require('./Rule');

module.exports = class Emphasis extends Rule {
  constructor() {
    super(/^\*\*(.*)\*\*/);
  }

  produce() {
    return {
      c: 'strong',
      d: this.match[1]
    };
  }
};