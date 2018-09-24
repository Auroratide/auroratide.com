import path from 'path';
import fs from 'fs';
import parse from 'Content/md-parser/index';

describe('MD Parser', () => {
  it('should parse the document', () => {
    const content = fs.readFileSync(path.join(__dirname, 'content.md'), 'utf-8');

    expect(parse(content)).toEqual([ {
      c: 'h1',
      d: 'Some Heading'
    }, {
      c: 'p',
      d: ['This is a ', {
        c: 'em',
        d: 'sentence'
      }, ' with ', {
        c: 'strong',
        d: 'bold'
      }, ' text.']
    }, {
      c: 'p',
      d: ['This is ', {
        c: 'em',
        d: {
          c: 'strong',
          d: 'bold and italicized'
        }
      }, ' text.']
    }, {
      c: 'h2',
      d: 'Lists'
    }, {
      c: 'ul',
      d: [ {
        c: 'li',
        d: 'Item 1'
      }, {
        c: 'li',
        d: 'Item 2'
      }, {
        c: 'li',
        d: 'Item 3'
      } ]
    } ]);
  });
});