const Rule = require('./Rule');
const Parser = require('../Parser');
const ListItem = require('./ListItem');
const Ignore = require('./Ignore');

module.exports = class OrderedList extends Rule {
  constructor() {
    super(/^\d\.\s(?:.|\r?\n\s*\d\.)*/);
  }

  produce() {
    return {
      c: 'ol',
      d: new Parser(this.match[0], [ ListItem, Ignore ]).parse()
    };
  }
};