const Rule = require('./Rule');

module.exports = class Character extends Rule {
  constructor() {
    super(/^(.|\n|\r)/);
  }

  produce() {
    return null;
  }
};