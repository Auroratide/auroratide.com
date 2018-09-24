import Paragraph from 'Content/md-parser/rules/Paragraph';

describe('Paragraph rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Paragraph();
  });

  describe('matches', () => {
    it('should match paragraphs', () => {
      expect(rule.matches('Some text')).toBeTruthy();
    });

    it('should not match new lines', () => {
      expect(rule.matches('\n')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for paragraphs', () => {
      rule.matches('Some text');
      
      expect(rule.produce()).toEqual({
        c: 'p',
        d: 'Some text'
      });
    });
  });
});