import ListItem from 'Content/md-parser/rules/ListItem';

describe('ListItem rule', () => {
  let rule;

  beforeEach(() => {
    rule = new ListItem();
  });

  describe('matches', () => {
    it('should match an unordered line item', () => {
      expect(rule.matches('* Item')).toBeTruthy();
    });

    it('should match an ordered line item', () => {
      expect(rule.matches('0. Item')).toBeTruthy();
      expect(rule.matches('1. Item')).toBeTruthy();
    });

    it('should not match line with indentation', () => {
      expect(rule.matches(' * Item')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should return the list item', () => {
      rule.matches('* Item');
      expect(rule.produce()).toEqual({
        c: 'li',
        d: 'Item'
      });
    });
  });
});