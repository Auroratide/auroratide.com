import parse from 'Content/md-parser';

describe('md-parser', () => {
  it('should parse empty string as an empty object', () => {
    expect(parse('')).toEqual({});
  });

  describe('paragraphs', () => {
    it('should parse a single line as a paragraph', () => {
      const input = 'This is a paragraph.';

      expect(parse(input)).toEqual({
        c: 'p',
        d: 'This is a paragraph.'
      });
    });

    it('should parse multiple lines as multiple paragraphs', () => {
      const input =

`This is a paragraph.

This is a second paragraph.`;

      expect(parse(input)).toEqual([ {
        c: 'p',
        d: 'This is a paragraph.'
      }, {
        c: 'p',
        d: 'This is a second paragraph.'
      } ]);
    });
  });
});