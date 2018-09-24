import UnorderedList from 'Content/md-parser/rules/UnorderedList';

describe('UnorderedList rule', () => {
  let rule;

  beforeEach(() => {
    rule = new UnorderedList();
  });

  describe('matches', () => {
    it('should match unordered lists', () => {
      expect(rule.matches('* Some text')).toBeTruthy();
    });

    it('should match the entire unordered list', () => {
      const input = '* A\n* B\nc';
      expect(rule.matches(input)).toBeTruthy();
      expect(rule.consumeToken(input)).toHaveLength(2); // \nc
    });

    it('should not match non-lists', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for unordered lists', () => {
      rule.matches('* Some text');
      
      expect(rule.produce()).toEqual({
        c: 'ul',
        d: {
          c: 'li',
          d: 'Some text'
        }
      });
    });
  });
});