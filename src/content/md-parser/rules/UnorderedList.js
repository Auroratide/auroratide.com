const Rule = require('./Rule');
const Parser = require('../Parser');
const ListItem = require('./ListItem');
const Ignore = require('./Ignore');

module.exports = class UnorderedList extends Rule {
  constructor() {
    super(/^\*\s(?:.|\r?\n\s*\*)*/);
  }

  produce() {
    return {
      c: 'ul',
      d: new Parser(this.match[0], [ ListItem, Ignore ]).parse()
    };
  }
};