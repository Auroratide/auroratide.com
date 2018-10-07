const Rule = require('./Rule');
const UnorderedList = require('./UnorderedList');
const OrderedList = require('./OrderedList');
const Paragraph = require('./Paragraph');
const Ignore = require('./Ignore');
const Parser = require('../Parser');

module.exports = class CodeBlock extends Rule {
  constructor() {
    super(/^,,,\r?\n((?:(?!,,,).|\r?\n)*)\r?\n,,,/);
    this.subrules = [ UnorderedList, OrderedList, Paragraph, Ignore ];
  }

  produce() {
    return {
      c: 'InfoBlock',
      d: new Parser(this.match[1], this.subrules).parse()
    };
  }
};