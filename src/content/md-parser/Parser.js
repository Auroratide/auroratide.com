module.exports = class Parser {
  constructor(toParse, rules) {
    this.next = toParse;
    this.rules = rules;
  }

  parse() {
    const rcon = [];

    while(this.next.length > 0) {
      const production = this.nextToken();
      if(production)
        rcon.push(production);
    }

    return rcon;
  }

  nextToken() {
    for(const Rule of this.rules) {
      const rule = new Rule();
      if(rule.matches(this.next)) {
        this.next = rule.consumeToken(this.next);
        return rule.produce();
      }
    }

    throw new Error('Could not parse remaining text');
  }
};