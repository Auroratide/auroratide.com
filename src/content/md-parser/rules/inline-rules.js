const Rule = require('./Rule');
const Character = require('./Character');
const Parser = require('../Parser');

// This file is needed because of circular dependencies between the different rules
// Circularly dependent rules must be in the same file, but they can be exported
// individually

class Emphasis extends Rule {
  constructor() {
    super(/^_(.*)_/);
    this.subrules = [ Strong, Character ];
  }

  produce() {
    return {
      c: 'em',
      d: new Parser(this.match[1], this.subrules).parse()
    };
  }
}

class Strong extends Rule {
  constructor() {
    super(/^\*\*(.*)\*\*/);
    this.subrules = [ Emphasis, Character ];
  }

  produce() {
    return {
      c: 'strong',
      d: new Parser(this.match[1], this.subrules).parse()
    };
  }
}

module.exports = {
  Emphasis, Strong
};