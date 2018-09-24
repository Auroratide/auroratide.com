import Character from 'Content/md-parser/rules/Character';

describe('Character rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Character();
  });

  describe('matches', () => {
    it('should match any character', () => {
      expect(rule.matches('$')).toBeTruthy();
    });

    it('should match whitespace', () => {
      expect(rule.matches(' ')).toBeTruthy();
      expect(rule.matches('\t')).toBeTruthy();
      expect(rule.matches('\n')).toBeTruthy();
      expect(rule.matches('\r')).toBeTruthy();
    });
  });

  describe('produce', () => {
    it('should return null', () => {
      expect(rule.produce()).toBe(null);
    });
  });
});