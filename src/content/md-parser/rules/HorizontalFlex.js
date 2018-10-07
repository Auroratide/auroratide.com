const Rule = require('./Rule');
const UnorderedList = require('./UnorderedList');
const OrderedList = require('./OrderedList');
const Component = require('./Component');
const Image = require('./Image');
const CodeBlock = require('./CodeBlock');
const InfoBlock = require('./InfoBlock');
const Paragraph = require('./Paragraph');
const Ignore = require('./Ignore');
const Parser = require('../Parser');

module.exports = class HorizontalFlex extends Rule {
  constructor() {
    super(/^<->\r?\n((?:.|\r?\n)*?)\r?\n<->/);
    this.subrules = [
      UnorderedList,
      OrderedList,
      Component,
      Image,
      CodeBlock,
      InfoBlock,
      Paragraph,
      Ignore
    ];
  }

  produce() {
    return {
      c: 'HorizontalFlex',
      d: new Parser(this.match[1], this.subrules).parse()
    };
  }
};