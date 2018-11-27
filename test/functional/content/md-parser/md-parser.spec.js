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
      c: 'blockquote',
      d: [ {
        c: 'p',
        d: ['This block quote has ', {
          c: 'strong',
          d: 'multiple'
        }, ' paragraphs.']
      }, {
        c: 'p',
        d: ['Using the ', {
          c: 'code',
          d: 'symbol'
        }, ' to do that.' ]
      } ]
    }, {
      c: 'InfoBlock',
      d: {
        c: 'p',
        d: ['Some kind of ', {
          c: 'em',
          d: 'info'
        }, ' block.']
      }
    }, {
      c: 'InfoBlock',
      d: {
        c: 'p',
        d: 'A success info block'
      },
      p: {
        success: true
      }
    }, {
      c: 'p',
      d: ['This text has ', {
        c: 'ColoredText',
        d: 'colored text',
        p: {
          color: '#456789'
        }
      }, ' in it.']
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
        d: ['Item 3 with ', {
          c: 'strong',
          d: 'bold'
        }, ' text' ]
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
    }, {
      c: 'p',
      d: ['This paragraph has a ', {
        c: 'strong',
        d: {
          c: 'Link',
          d: 'bold link',
          p: {
            to: '/posts',
            newTab: false
          }
        }
      }, '!']
    }, {
      c: 'h2',
      d: 'Code Blocks'
    }, {
      c: 'CodeBlock',
      d: 'const x = 5;',
      p: {
        language: 'javascript'
      }
    }, {
      c: 'CodeBlock',
      d: 'const x = 5;',
      p: {
        language: 'javascript',
        warning: true
      }
    }, {
      c: 'h2',
      d: 'Components'
    }, {
      c: 'Widget',
      p: {
        width: '500'
      }
    }, {
      c: 'AnotherWidget',
      d: {
        c: 'p',
        d: ['This is ', {
          c: 'strong',
          d: 'bold'
        }, ' text.']
      },
      p: {
        height: '50'
      }
    }, {
      c: 'hr'
    }, {
      c: 'HorizontalFlex',
      d: [ {
        c: 'p',
        d: 'Some text.'
      }, {
        c: 'p',
        d: 'More text.'
      } ]
    } ]);
  });
});