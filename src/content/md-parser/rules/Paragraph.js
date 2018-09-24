const Rule = require('./Rule');
const Link = require('./Link');
const Emphasis = require('./Emphasis');
const Strong = require('./Strong');
const Character = require('./Character');
const Parser = require('../Parser');

module.exports = class Paragraph extends Rule {
  constructor() {
    super(/^([^\n\r]+)(\r?\n\r?\n)?/);
    this.subrules = [ Link, Emphasis, Strong, Character ];
  }

  produce() {
    return {
      c: 'p',
      d: new Parser(this.match[1], this.subrules).parse()
    };
  }
};