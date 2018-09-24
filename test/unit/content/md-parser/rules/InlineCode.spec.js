import InlineCode from 'Content/md-parser/rules/InlineCode';

describe('InlineCode rule', () => {
  let rule;

  beforeEach(() => {
    rule = new InlineCode();
  });

  describe('matches', () => {
    it('should match inline code', () => {
      expect(rule.matches('`text`')).toBeTruthy();
    });

    it('should not match non-code', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for inline code', () => {
      rule.matches('`text`');
      
      expect(rule.produce()).toEqual({
        c: 'code',
        d: 'text'
      });
    });
  });
});