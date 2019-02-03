import MockContext from './MockContext';
import ColoredText from 'Content/md-parser/rules/ColoredText';

describe('ColoredText rule', () => {
  let rule;

  beforeEach(() => {
    rule = new ColoredText(new MockContext());
  });

  describe('matches', () => {
    it('should match colore text', () => {
      expect(rule.matches('##123d56|Some text##')).toBeTruthy();
    });

    it('should not match colored text with invalid color', () => {
      expect(rule.matches('##red|Some text##')).toBeFalsy();
    });

    it('should not match non-colored text', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for colored text', () => {
      rule.matches('##123d56|Some text##');
      
      expect(rule.produce()).toEqual({
        c: 'ColoredText',
        d: 'Some text',
        p: {
          color: '#123d56'
        }
      });
    });
  });
});