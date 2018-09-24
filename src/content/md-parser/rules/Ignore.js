const Rule = require('./Rule');

module.exports = class Ignore extends Rule {
  constructor() {
    super(/^(.|\n|\r)/);
  }

  produce() {
    return null;
  }
};