const Rule = require('./Rule');
const Paragraph = require('./Paragraph');
const Ignore = require('./Ignore');
const Parser = require('../Parser');

module.exports = class Blockquote extends Rule {
  constructor() {
    super(/^>\s(?:.|\r?\n>)*/);
    this.subrules = [ Paragraph, Ignore ];
  }

  produce() {
    return {
      c: 'blockquote',
      d: new Parser(this.stripPrefixes(this.match[0]), this.subrules).parse()
    };
  }

  stripPrefixes(text) {
    return text
      .split('\n')
      .map(line => line.substring(2, line.length))
      .join('\n');
  }
};