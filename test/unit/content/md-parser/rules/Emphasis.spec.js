import Emphasis from 'Content/md-parser/rules/Emphasis';

describe('Emphasis rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Emphasis();
  });

  describe('matches', () => {
    it('should match emphasis', () => {
      expect(rule.matches('_Some text_')).toBeTruthy();
    });

    it('should not match non-emphasis', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for emphasis', () => {
      rule.matches('_Some text_');
      
      expect(rule.produce()).toEqual({
        c: 'em',
        d: 'Some text'
      });
    });
  });
});