const { Rule, ProductionBuilder } = require('md-reactor/parsing');

module.exports = class HorizontalFlex extends Rule {
  constructor(context) {
    super(/^<->\r?\n((?:.|\r?\n)*?)\r?\n<->/, context);
  }

  content() {
    return this.match[1];
  }

  produce() {
    return new ProductionBuilder()
      .component('HorizontalFlex')
      .children(this.context.asBlock.parse(this.content()))
      .build();
  }
};