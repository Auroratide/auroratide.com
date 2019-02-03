const { Rule, ProductionBuilder } = require('md-reactor/parsing');

module.exports = class ColoredText extends Rule {
  constructor(context) {
    super(/^##([0-9a-fA-F]{6})\|(.*?)##/, context);
  }

  color() {
    return `#${this.match[1]}`;
  }

  text() {
    return this.match[2];
  }

  produce() {
    return new ProductionBuilder()
      .component('ColoredText')
      .children(this.text())
      .props({
        color: this.color()
      })
      .build();
  }
};
