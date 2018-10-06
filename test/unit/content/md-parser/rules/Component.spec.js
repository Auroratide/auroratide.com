import Component from 'Content/md-parser/rules/Component';

describe('Component rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Component();
  });

  describe('matches', () => {
    it('should match components', () => {
      expect(rule.matches('<Widget prop="value" />')).toBeTruthy();
    });

    it('should not match non components', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for components without attributes', () => {
      rule.matches('<Widget />');
      
      expect(rule.produce()).toEqual({
        c: 'Widget',
        p: {}
      });
    });

    it('should produce rcon for components with one attribute', () => {
      rule.matches('<Widget width="10" />');
      
      expect(rule.produce()).toEqual({
        c: 'Widget',
        p: {
          width: '10'
        }
      });
    });

    it('should produce rcon for components with multiple attributes', () => {
      rule.matches('<Widget width="10" height="20" />');
      
      expect(rule.produce()).toEqual({
        c: 'Widget',
        p: {
          width: '10',
          height: '20'
        }
      });
    });
  });
});