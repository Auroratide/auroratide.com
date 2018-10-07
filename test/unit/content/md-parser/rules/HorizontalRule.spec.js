import HorizontalRule from 'Content/md-parser/rules/HorizontalRule';

describe('HorizontalRule rule', () => {
  let rule;

  beforeEach(() => {
    rule = new HorizontalRule();
  });

  describe('matches', () => {
    it('should match horizontal rules', () => {
      expect(rule.matches('----')).toBeTruthy();
    });

    it('should not match non horizontal rules', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });

    it('should not match when there are not enough dashes', () => {
      expect(rule.matches('---')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for horizontal rules', () => {
      rule.matches('-----');
      
      expect(rule.produce()).toEqual({
        c: 'hr'
      });
    });
  });
});