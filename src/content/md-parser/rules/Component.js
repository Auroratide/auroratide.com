const Rule = require('./Rule');
const Parser = require('../Parser');
const Ignore = require('./Ignore');

const Heading = require('./Heading');
const UnorderedList = require('./UnorderedList');
const OrderedList = require('./OrderedList');
const Image = require('./Image');
const CodeBlock = require('./CodeBlock');
const InfoBlock = require('./InfoBlock');
const Blockquote = require('./Blockquote');
const HorizontalRule = require('./HorizontalRule');
const Paragraph = require('./Paragraph');

class Attribute extends Rule {
  constructor() {
    super(/^([A-Za-z0-9_]+)="(.*?[^\\])"/);
  }

  produce() {
    return {
      [this.match[1]]: this.match[2]
    };
  }
}

module.exports = class Component extends Rule {
  constructor() {
    super(/^<([A-Za-z0-9_]+)\s*(.*?)(\/?)>/);
  }

  name() {
    return this.match[1];
  }

  attributes() {
    return this.match[2];
  }

  hasChildren() {
    return this.match[3] !== '/';
  }

  matches(str) {
    if(super.matches(str) && this.hasChildren()) {
      const endTag = `</${this.name()}>`;
      const endTagPosition = str.search(endTag);

      if(endTagPosition < 0) {
        this.match = null;
      } else {
        const startTag = this.match[0];
        this.match[0] = str.substring(0, endTagPosition + endTag.length);
        this.match[4] = str.substring(startTag.length, endTagPosition);
      }
    }

    return this.match;
  }

  produce() {
    const blockRules = [
      Heading,
      // HorizontalFlex, // causes crash
      UnorderedList,
      OrderedList,
      Component,
      Image,
      CodeBlock,
      InfoBlock,
      Blockquote,
      HorizontalRule,
      Paragraph,
      Ignore
    ];

    return {
      c: this.match[1],
      d: this.match[4] ? new Parser(this.match[4], blockRules).parse() : undefined,
      p: this.flatten(new Parser(this.match[2], [Attribute, Ignore]).parse())
    };
  }

  flatten(props) {
    if(Array.isArray(props)) {
      return props.reduce((obj, cur) => Object.assign(obj, cur), {});
    } else {
      return props;
    }
  }
};