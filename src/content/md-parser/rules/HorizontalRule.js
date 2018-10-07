const Rule = require('./Rule');

module.exports = class HorizontalRule extends Rule {
  constructor() {
    super(/^-----*/);
  }

  produce() {
    return {
      c: 'hr'
    };
  }
};