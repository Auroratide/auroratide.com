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
        d: ['Item 2', {
          c: 'ol',
          d: [ {
            c: 'li',
            d: 'SubItem 1'
          }, {
            c: 'li',
            d: 'SubItem 2'
          } ]
        } ]
      }, {
        c: 'li',
        d: 'Item 3'
      } ]
    }, {
      c: 'ol',
      d: [ {
        c: 'li',
        d: 'Item 1'
      }, {
        c: 'li',
        d: 'Item 2'
      } ]
    }, {
      c: 'h2',
      d: 'Images and Links'
    }, {
      c: 'img',
      p: {
        alt: 'Text',
        src: '/img/url.png'
      }
    } ]);
  });
});