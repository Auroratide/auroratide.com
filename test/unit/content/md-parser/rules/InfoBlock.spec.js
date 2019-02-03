import MockContext from './MockContext';
import InfoBlock from 'Content/md-parser/rules/InfoBlock';

describe('InfoBlock rule', () => {
  let rule;

  beforeEach(() => {
    rule = new InfoBlock(new MockContext());
  });

  describe('matches', () => {
    it('should match info blocks', () => {
      expect(rule.matches(',,,\ntext\n,,,')).toBeTruthy();
    });

    it('should match success info blocks', () => {
      expect(rule.matches('+,,,\ntext\n,,,')).toBeTruthy();
    });

    it('should match warning info blocks', () => {
      expect(rule.matches('~,,,\ntext\n,,,')).toBeTruthy();
    });

    it('should match danger info blocks', () => {
      expect(rule.matches('-,,,\ntext\n,,,')).toBeTruthy();
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
        d: 'text'
      });
    });

    it('should produce rcon for success info blocks', () => {
      rule.matches('+,,,\ntext\n,,,');
      
      expect(rule.produce()).toEqual({
        c: 'InfoBlock',
        d: 'text',
        p: {
          success: true
        }
      });
    });

    it('should produce rcon for warning info blocks', () => {
      rule.matches('~,,,\ntext\n,,,');
      
      expect(rule.produce()).toEqual({
        c: 'InfoBlock',
        d: 'text',
        p: {
          warning: true
        }
      });
    });

    it('should produce rcon for danger info blocks', () => {
      rule.matches('-,,,\ntext\n,,,');
      
      expect(rule.produce()).toEqual({
        c: 'InfoBlock',
        d: 'text',
        p: {
          danger: true
        }
      });
    });
  });
});