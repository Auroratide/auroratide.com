import MockContext from './MockContext';
import HorizontalFlex from 'Content/md-parser/rules/HorizontalFlex';

describe('HorizontalFlex rule', () => {
  let rule;

  beforeEach(() => {
    rule = new HorizontalFlex(new MockContext());
  });

  describe('matches', () => {
    it('should match horizontal flex', () => {
      expect(rule.matches('<->\nStuff\n<->')).toBeTruthy();
    });

    it('should not match non horizontal flex', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for horizontal flex', () => {
      rule.matches('<->\nStuff\n<->');
      
      expect(rule.produce()).toEqual({
        c: 'HorizontalFlex',
        d: 'Stuff'
      });
    });
  });
});