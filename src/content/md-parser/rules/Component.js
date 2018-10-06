const Rule = require('./Rule');
const Parser = require('../Parser');
const Ignore = require('./Ignore');

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
    super(/^<([A-Za-z0-9_]+)\s+(.*?)\/>/);
  }

  produce() {
    return {
      c: this.match[1],
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