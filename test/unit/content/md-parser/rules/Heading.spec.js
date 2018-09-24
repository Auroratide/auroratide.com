import Heading from 'Content/md-parser/rules/Heading';

describe('Heading rule', () => {
  let rule;

  beforeEach(() => {
    rule = new Heading();
  });

  describe('matches', () => {
    it('should match level 1 headings', () => {
      expect(rule.matches('# Heading 1')).toBeTruthy();
    });

    it('should match level 2 headings', () => {
      expect(rule.matches('## Heading 2')).toBeTruthy();
    });

    it('should match level 3 headings', () => {
      expect(rule.matches('### Heading 3')).toBeTruthy();
    });

    it('should match level 4 headings', () => {
      expect(rule.matches('#### Heading 4')).toBeTruthy();
    });

    it('should match level 5 headings', () => {
      expect(rule.matches('##### Heading 5')).toBeTruthy();
    });

    it('should match level 6 headings', () => {
      expect(rule.matches('###### Heading 6')).toBeTruthy();
    });

    it('should not match non heading', () => {
      expect(rule.matches('Some string')).toBeFalsy();
    });

    it('should not match beyond level 6 headings', () => {
      expect(rule.matches('####### Heading 7')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for level 1 headings', () => {
      rule.matches('# Heading');
      
      expect(rule.produce()).toEqual({
        c: 'h1',
        d: 'Heading'
      });
    });

    it('should produce rcon for level 2 headings', () => {
      rule.matches('## Heading');
      
      expect(rule.produce()).toEqual({
        c: 'h2',
        d: 'Heading'
      });
    });

    it('should produce rcon for level 3 headings', () => {
      rule.matches('### Heading');
      
      expect(rule.produce()).toEqual({
        c: 'h3',
        d: 'Heading'
      });
    });

    it('should produce rcon for level 4 headings', () => {
      rule.matches('#### Heading');
      
      expect(rule.produce()).toEqual({
        c: 'h4',
        d: 'Heading'
      });
    });

    it('should produce rcon for level 5 headings', () => {
      rule.matches('##### Heading');
      
      expect(rule.produce()).toEqual({
        c: 'h5',
        d: 'Heading'
      });
    });

    it('should produce rcon for level 6 headings', () => {
      rule.matches('###### Heading');
      
      expect(rule.produce()).toEqual({
        c: 'h6',
        d: 'Heading'
      });
    });
  });
});