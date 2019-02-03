const { Rule, ProductionBuilder } = require('md-reactor/parsing');

module.exports = class Link extends Rule {
  constructor(context) {
    super(/^\[([^\]]*)\]\((\*?)([^)]*)\)/, context);
  }

  text() {
    return this.match[1];
  }

  href() {
    return this.match[3];
  }

  isExternal() {
    return this.match[2] ? true : false;
  }

  produce() {
    return new ProductionBuilder()
      .component('Link')
      .children(this.text())
      .props({
        to: this.href(),
        newTab: this.isExternal()
      })
      .build();
  }
};