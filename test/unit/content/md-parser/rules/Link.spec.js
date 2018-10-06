import Link from 'Content/md-parser/rules/Link';

describe('Link rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Link();
  });

  describe('matches', () => {
    it('should match links', () => {
      expect(rule.matches('[text](/url)')).toBeTruthy();
      expect(rule.matches('[text](*/url)')).toBeTruthy();
    });

    it('should not match non-links', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for links', () => {
      rule.matches('[text](/url)');
      
      expect(rule.produce()).toEqual({
        c: 'Link',
        d: 'text',
        p: {
          to: '/url',
          newTab: false
        }
      });
    });

    it('should set newTab when specified', () => {
      rule.matches('[text](*/url)');
      
      expect(rule.produce()).toEqual({
        c: 'Link',
        d: 'text',
        p: {
          to: '/url',
          newTab: true
        }
      });
    });
  });
});