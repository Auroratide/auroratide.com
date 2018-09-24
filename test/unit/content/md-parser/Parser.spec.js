import Rule from 'Content/md-parser/rules/Rule';
import Parser from 'Content/md-parser/Parser';

describe('Parser', () => {
  it('should return empty array when input string is empty', () => {
    const parser = new Parser('', [ A ]);
    expect(parser.parse()).toEqual([]);
  });

  it('should return rcon for a single match', () => {
    const parser = new Parser('a', [ A ]);
    expect(parser.parse()).toEqual({
      c: 'a'
    });
  });

  it('should return rcon for multiple matches', () => {
    const c = 'a';
    const parser = new Parser('aaa', [ A ]);
    expect(parser.parse()).toEqual([{ c }, { c }, { c }]);
  });

  it('should ignore null productions in the resultant rcon', () => {
    const c = 'a';
    const parser = new Parser('aba', [ A, B ]);
    expect(parser.parse()).toEqual([{ c }, { c }]);
  });

  it('should concatenate consecutive strings', () => {
    const parser = new Parser('ccc', [ C ]);
    expect(parser.parse()).toEqual('ccc');
  });

  class A extends Rule {
    constructor() {
      super(/^a/);
    }

    produce() {
      return { c: 'a' };
    }
  }

  class B extends Rule {
    constructor() {
      super(/^b/);
    }

    produce() {
      return null;
    }
  }

  class C extends Rule {
    constructor() {
      super(/^c/);
    }

    produce() {
      return 'c';
    }
  }
});