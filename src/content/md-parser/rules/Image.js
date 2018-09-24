const Rule = require('./Rule');

module.exports = class Image extends Rule {
  constructor() {
    super(/^!\[([^\]]*)\]\(([^)]*)\)/);
  }

  produce() {
    return {
      c: 'img',
      p: {
        alt: this.match[1],
        src: this.match[2]
      }
    };
  }
};