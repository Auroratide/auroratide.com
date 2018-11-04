const Rule = require('./Rule');

module.exports = class CodeBlock extends Rule {
  constructor() {
    super(/^(\+|~|-)?```([a-z]*)\r?\n((?:(?!```).|\r?\n)*)\r?\n```/);
  }

  produce() {
    let p;
    if(this.match[1] || this.match[2]) {
      p = this.match[2] ? {
        language: this.match[2]
      } : undefined;

      p = p ? Object.assign(p, this.getType(this.match[1])) : this.getType(this.match[1]);
    }

    return {
      c: 'CodeBlock',
      d: this.match[3],
      p
    };
  }

  getType(char) {
    switch(char) {
      case '+': return { success: true };
      case '-': return { danger: true };
      case '~': return { warning: true };
      default: return undefined;
    }
  }
};