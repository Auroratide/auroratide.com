const Rule = require('./Rule');

module.exports = class Link extends Rule {
  constructor() {
    super(/^\[([^\]]*)\]\(([^)]*)\)/);
  }

  produce() {
    return {
      c: 'Link',
      d: this.match[1],
      p: {
        to: this.match[2]
      }
    };
  }
};