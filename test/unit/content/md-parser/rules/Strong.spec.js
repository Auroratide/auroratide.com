import Strong from 'Content/md-parser/rules/Strong';

describe('Strong rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Strong();
  });

  describe('matches', () => {
    it('should match strong', () => {
      expect(rule.matches('**Some * text**')).toBeTruthy();
    });

    it('should not match non-strong', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for strong', () => {
      rule.matches('**Some text**');
      
      expect(rule.produce()).toEqual({
        c: 'strong',
        d: 'Some text'
      });
    });
  });
});