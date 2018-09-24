import Character from 'Content/md-parser/rules/Character';

describe('Character rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Character();
  });

  describe('matches', () => {
    it('should match any character', () => {
      expect(rule.matches('$')).toBeTruthy();
      expect(rule.matches(' ')).toBeTruthy();
    });
  });

  describe('produce', () => {
    it('should return the chracter', () => {
      rule.matches('t');
      expect(rule.produce()).toBe('t');
    });
  });
});