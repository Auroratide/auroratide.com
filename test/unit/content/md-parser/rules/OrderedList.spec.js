import OrderedList from 'Content/md-parser/rules/OrderedList';

describe('OrderedList rule', () => {
  let rule;

  beforeEach(() => {
    rule = new OrderedList();
  });

  describe('matches', () => {
    it('should match ordered lists', () => {
      expect(rule.matches('0. Some text')).toBeTruthy();
    });

    it('should match the entire ordered list', () => {
      const input = '1. A\n2. B\nc';
      expect(rule.matches(input)).toBeTruthy();
      expect(rule.consumeToken(input)).toHaveLength(2); // \nc
    });

    it('should not match non-lists', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for ordered lists', () => {
      rule.matches('0. Some text');
      
      expect(rule.produce()).toEqual({
        c: 'ol',
        d: {
          c: 'li',
          d: 'Some text'
        }
      });
    });
  });
});