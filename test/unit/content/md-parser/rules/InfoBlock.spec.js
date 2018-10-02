import InfoBlock from 'Content/md-parser/rules/InfoBlock';

describe('InfoBlock rule', () => {
  let rule;

  beforeEach(() => {
    rule = new InfoBlock();
  });

  describe('matches', () => {
    it('should match info blocks', () => {
      expect(rule.matches(',,,\ntext\n,,,')).toBeTruthy();
    });

    it('should not match non info blocks', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for info blocks', () => {
      rule.matches(',,,\ntext\n,,,');
      
      expect(rule.produce()).toEqual({
        c: 'InfoBlock',
        d: {
          c: 'p',
          d: 'text'
        }
      });
    });
  });
});