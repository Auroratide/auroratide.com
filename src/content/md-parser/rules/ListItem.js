const Rule = require('./Rule');

module.exports = class ListItem extends Rule {
  constructor() {
    super(/^(?:\*|\d\.)\s(.*)/);
  }

  produce() {
    return {
      c: 'li',
      d: this.match[1]
    };
  }
};