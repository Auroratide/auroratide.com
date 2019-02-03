const { Rule, ProductionBuilder } = require('md-reactor/parsing');

module.exports = class InfoBlock extends Rule {
  constructor(context) {
    super(/^(\+|-|~)?,,,\r?\n((?:(?!,,,).|\r?\n)*)\r?\n,,,/, context);
  }

  content() {
    return this.match[2];
  }

  type() {
    switch(this.match[1]) {
      case '+': return { success: true };
      case '-': return { danger: true };
      case '~': return { warning: true };
      default: return undefined;
    }
  }

  produce() {
    return new ProductionBuilder()
      .component('InfoBlock')
      .props(this.type())
      .children(this.context.asBlock.parse(this.content()))
      .build();
  }
};