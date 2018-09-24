import Image from 'Content/md-parser/rules/Image';

describe('Image rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Image();
  });

  describe('matches', () => {
    it('should match images', () => {
      expect(rule.matches('![alt](url.png)')).toBeTruthy();
    });

    it('should match images without alt text', () => {
      expect(rule.matches('![](url.png)')).toBeTruthy();
    });

    it('should not match non-images', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for images', () => {
      rule.matches('![alt](url.png)');
      
      expect(rule.produce()).toEqual({
        c: 'img',
        p: {
          alt: 'alt',
          src: 'url.png'
        }
      });
    });
  });
});