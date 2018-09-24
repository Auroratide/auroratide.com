import Blockquote from 'Content/md-parser/rules/Blockquote';

describe('Blockquote rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Blockquote();
  });

  describe('matches', () => {
    it('should match blockquotes', () => {
      expect(rule.matches('> quote')).toBeTruthy();
    });

    it('should match the entire blockquote', () => {
      const input = '> quote\n>\n> more';
      expect(rule.matches(input)).toBeTruthy();
      expect(rule.consumeToken(input)).toHaveLength(0);
    });

    it('should not match non quotes', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for blockquotes', () => {
      rule.matches('> Some text');
      
      expect(rule.produce()).toEqual({
        c: 'blockquote',
        d: {
          c: 'p',
          d: 'Some text'
        }
      });
    });
  });
});