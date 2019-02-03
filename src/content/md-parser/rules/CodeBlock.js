const { Rule, ProductionBuilder } = require('md-reactor/parsing');

module.exports = class CodeBlock extends Rule {
  constructor(context) {
    super(/^(\+|~|-)?```([a-z]*)\r?\n((?:(?!```).|\r?\n)*)\r?\n```/, context);
  }

  code() {
    return this.match[3];
  }

  language() {
    return this.match[2];
  }

  type() {
    switch(this.match[1]) {
      case '+': return { success: true };
      case '-': return { danger: true };
      case '~': return { warning: true };
      default: return {};
    }
  }

  produce() {
    return new ProductionBuilder()
      .component('CodeBlock')
      .children(this.code())
      .props(Object.assign({}, this.type(), {
        language: this.language()
      }))
      .build();
  }
};