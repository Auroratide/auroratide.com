const { Rule, ProductionBuilder } = require('md-reactor/parsing');

module.exports = class StegoBody extends Rule {
  constructor(context) {
    super(/^<StegoBody>((?:.|\r?\n)*?)<\/StegoBody>/, context);
  }

  produce() {
    return new ProductionBuilder()
      .component('StegoBody')
      .children(this.context.asBlock.parse(this.match[1]))
      .build();
  }
};