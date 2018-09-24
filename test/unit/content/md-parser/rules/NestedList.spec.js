import NestedList from 'Content/md-parser/rules/NestedList';

describe('NestedList rule', () => {
  let rule;

  beforeEach(() => {
    rule = new NestedList();
  });

  describe('matches', () => {
    it('should match a list item and the corresponding list', () => {
      expect(rule.matches('* Item\n  * SubItem')).toBeTruthy();
    });

    it('should not match consecutive list items', () => {
      expect(rule.matches('* Item\n* Item')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for the nested lists', () => {
      rule.matches('* Item\n  * SubItem');
      
      expect(rule.produce()).toEqual({
        c: 'li',
        d: ['Item', {
          c: 'ul',
          d: {
            c: 'li',
            d: 'SubItem'
          }
        }]
      });
    });
  });
});