const Rule = require('./Rule');
const Emphasis = require('./Emphasis');
const Strong = require('./Strong');
const Character = require('./Character');
const Parser = require('../Parser');

const subrules = [ Emphasis, Strong, Character ];

module.exports = class Paragraph extends Rule {
  constructor() {
    super(/^([^\n\r]+)(\r?\n\r?\n)?/);
  }

  produce() {
    return {
      c: 'p',
      d: new Parser(this.match[1], subrules).parse()
    };
  }
};