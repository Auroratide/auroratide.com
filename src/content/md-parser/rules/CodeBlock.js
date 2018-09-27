const Rule = require('./Rule');

module.exports = class CodeBlock extends Rule {
  constructor() {
    super(/^```([a-z]*)\r?\n((?:(?!```).|\r?\n)*)\r?\n```/);
  }

  produce() {
    const p = this.match[1] ? {
      language: this.match[1]
    } : undefined;

    return {
      c: 'CodeBlock',
      d: this.match[2],
      p
    };
  }
};