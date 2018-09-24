const Rule = require('./Rule');
const Character = require('./Character');
const Emphasis = require('./Emphasis');
const InlineCode = require('./InlineCode');
const Link = require('./Link');
const Strong = require('./Strong');
const Parser = require('../Parser');

module.exports = class ListItem extends Rule {
  constructor() {
    super(/^(?:\*|\d\.)\s(.*)/);
    this.subrules = [ Link, InlineCode, Emphasis, Strong, Character ];
  }

  produce() {
    return {
      c: 'li',
      d: new Parser(this.match[1], this.subrules).parse()
    };
  }
};