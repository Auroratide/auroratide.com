const Rule = require('./Rule');
const Parser = require('../Parser');
const ListItem = require('./ListItem');
const Ignore = require('./Ignore');
const Character = require('./Character');
const Emphasis = require('./Emphasis');
const InlineCode = require('./InlineCode');
const Link = require('./Link');
const Strong = require('./Strong');

class UnorderedList extends Rule {
  constructor() {
    super(/^\*\s(?:.|\r?\n[ \t]*(?:\*|\d\.))*/);
  }

  produce() {
    return {
      c: 'ul',
      d: new Parser(this.match[0], [ NestedList, ListItem, Ignore ]).parse()
    };
  }
}

class OrderedList extends Rule {
  constructor() {
    super(/^\d\.\s(?:.|\r?\n[ \t]*(?:\*|\d\.))*/);
  }

  produce() {
    return {
      c: 'ol',
      d: new Parser(this.match[0], [ NestedList, ListItem, Ignore ]).parse()
    };
  }
}

class NestedList extends Rule {
  constructor() {
    super(/^(?:\*|\d\.)\s(.*)\r?\n([ \t]+(?:\*|\d\.)\s(?:.|\r?\n[ \t]+(?:\*|\d\.))*)/);
  }

  produce() {
    return {
      c: 'li',
      d: [
        new Parser(this.match[1], [ Link, InlineCode, Emphasis, Strong, Character ]).parse(),
        new Parser(this.deindent(this.match[2]), [ UnorderedList, OrderedList, Ignore ]).parse()
      ]
    };
  }

  deindent(list) {
    const items = list.split('\n');
    const indentLength = items[0].match(/^\s+/)[0].length;

    return items.map(item =>
      item.substring(indentLength, item.length)
    ).join('\n');
  }
}

module.exports = {
  UnorderedList,
  OrderedList,
  NestedList
};