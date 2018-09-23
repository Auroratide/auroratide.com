import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import build from 'Content/posts/steps';
import PostDataBuilder from 'Test/utils/builders/PostDataBuilder';

describe('Build Posts Functional', () => {

  const TMP_DIR = path.join(__dirname, 'tmp');

  let newer;
  let older;

  beforeEach(done => {
    newer = new PostDataBuilder()
      .withId('newer-id')
      .withPublished_at('2018-05-27T00:00:00Z')
      .build();

    older = new PostDataBuilder()
      .withId('older-id')
      .withPublished_at('2018-05-26T00:00:00Z')
      .build();

    mkdirp(TMP_DIR, () => {
      fs.writeFileSync(path.join(TMP_DIR, 'newer.json'), JSON.stringify({ post: newer }));
      fs.writeFileSync(path.join(TMP_DIR, 'older.json'), JSON.stringify({ post: older }));
      done();
    });
  });
  
  it('should write the posts into a single array in the index.json file', async done => {
    const withoutContent = post => {
      const { content, ...rest } = post; // eslint-disable-line
      return rest;
    };

    const expectedObject = {
      posts: [ withoutContent(newer), withoutContent(older) ]
    };

    await build(TMP_DIR, TMP_DIR);

    fs.readFile(path.join(TMP_DIR, 'index.json'), (err, data) => {
      expect(JSON.parse(data)).toEqual(expectedObject);
      done();
    });
  });

  it('should write a file for each post', async done => {
    await build(TMP_DIR, TMP_DIR);

    fs.readFile(path.join(TMP_DIR, 'newer-id.json'), (err, data) => {
      expect(JSON.parse(data)).toEqual(newer);
      fs.readFile(path.join(TMP_DIR, 'older-id.json'), (err, data) => {
        expect(JSON.parse(data)).toEqual(older);
        done();
      });
    });
  });

  afterEach(done => rimraf(TMP_DIR, done));
});