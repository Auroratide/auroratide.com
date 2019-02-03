import MockContext from './MockContext';
import StegoBody from 'Content/md-parser/rules/StegoBody';

describe('StegoBody rule', () => {
  let rule;

  beforeEach(() => {
    rule = new StegoBody(new MockContext());
  });

  describe('matches', () => {
    it('should match the StegoBody tag', () => {
      expect(rule.matches('<StegoBody>\nSome text\n</StegoBody>')).toBeTruthy();
    });

    it('should not match non info blocks', () => {
      expect(rule.matches('Some text')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should make production', () => {
      rule.matches('<StegoBody>\nSome text\n</StegoBody>');
      
      expect(rule.produce()).toEqual({
        c: 'StegoBody',
        d: '\nSome text\n'
      });
    });
  });
});