module.exports = class Parser {
  constructor(toParse, rules) {
    this.next = toParse;
    this.rules = rules;
  }

  parse() {
    let rcon = [];

    while(this.next.length > 0) {
      const production = this.nextToken();
      if(production)
        rcon.push(production);
    }

    rcon = this.flattenStrings(rcon);
    return rcon.length === 1 ? rcon[0] : rcon;
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

  flattenStrings(rcon) {
    const flattenedRcon = [];
    rcon.forEach(elem => {
      if(typeof elem === 'string' && flattenedRcon.length > 0 && typeof flattenedRcon[flattenedRcon.length - 1] === 'string')
        flattenedRcon[flattenedRcon.length - 1] = flattenedRcon[flattenedRcon.length - 1] + elem;
      else
        flattenedRcon.push(elem);
    });

    return flattenedRcon;
  }
};