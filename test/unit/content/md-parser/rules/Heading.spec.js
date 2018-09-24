import Heading from 'Content/md-parser/rules/Heading';

describe('Heading rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Heading();
  });

  describe('matches', () => {
    it('should match level 1 headings', () => {
      expect(rule.matches('# Heading 1')).toBeTruthy();
    });

    it('should not match non heading', () => {
      expect(rule.matches('Some string')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for level 1 headings', () => {
      rule.matches('# Heading 1');
      
      expect(rule.produce()).toEqual({
        c: 'h1',
        d: 'Heading 1'
      });
    });
  });
});