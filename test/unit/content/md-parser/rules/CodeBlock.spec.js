import CodeBlock from 'Content/md-parser/rules/CodeBlock';

describe('CodeBlock rule', () => {
  let rule;

  beforeEach(() => {
    rule = new CodeBlock();
  });

  describe('matches', () => {
    it('should match code blocks', () => {
      expect(rule.matches('```javascript\nconst c = 5;\n```')).toBeTruthy();
    });

    it('should match success code blocks', () => {
      expect(rule.matches('+```javascript\nconst c = 5;\n```')).toBeTruthy();
    });

    it('should match warning code blocks', () => {
      expect(rule.matches('~```javascript\nconst c = 5;\n```')).toBeTruthy();
    });

    it('should match danger code blocks', () => {
      expect(rule.matches('-```javascript\nconst c = 5;\n```')).toBeTruthy();
    });

    it('should not match non code blocks', () => {
      expect(rule.matches('`Some text`')).toBeFalsy();
    });
  });

  describe('produce', () => {
    it('should produce rcon for code blocks', () => {
      rule.matches('```javascript\nconst c = 5;\n```');
      
      expect(rule.produce()).toEqual({
        c: 'CodeBlock',
        d: 'const c = 5;',
        p: {
          language: 'javascript'
        }
      });
    });

    it('should not include language if unspecified', () => {
      rule.matches('```\nconst c = 5;\n```');
      
      expect(rule.produce()).toEqual({
        c: 'CodeBlock',
        d: 'const c = 5;'
      });
    });

    it('should produce rcon for success code blocks', () => {
      rule.matches('+```\nconst c = 5;\n```');
      
      expect(rule.produce()).toEqual({
        c: 'CodeBlock',
        d: 'const c = 5;',
        p: {
          success: true
        }
      });
    });

    it('should produce rcon for warning code blocks', () => {
      rule.matches('~```\nconst c = 5;\n```');
      
      expect(rule.produce()).toEqual({
        c: 'CodeBlock',
        d: 'const c = 5;',
        p: {
          warning: true
        }
      });
    });

    it('should produce rcon for danger code blocks', () => {
      rule.matches('-```\nconst c = 5;\n```');
      
      expect(rule.produce()).toEqual({
        c: 'CodeBlock',
        d: 'const c = 5;',
        p: {
          danger: true
        }
      });
    });
  });
});