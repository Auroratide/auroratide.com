import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import build from 'Content/digests/steps';
import DigestDataBuilder from 'Test/utils/builders/DigestDataBuilder';

describe('Build Digests Functional', () => {

  const TMP_DIR = path.join(__dirname, 'tmp');

  let newer;
  let older;

  beforeEach(() => {
    newer = new DigestDataBuilder()
      .withCreated_at('2018-05-27T00:00:00Z')
      .build();

    older = new DigestDataBuilder()
      .withCreated_at('2018-05-26T00:00:00Z')
      .build();

    mkdirp.sync(path.join(TMP_DIR, 'newer'));
    mkdirp.sync(path.join(TMP_DIR, 'older'));
    fs.writeFileSync(path.join(TMP_DIR, 'newer', 'meta.json'), JSON.stringify(newer));
    fs.writeFileSync(path.join(TMP_DIR, 'older', 'meta.json'), JSON.stringify(older));
  });
  
  it('should write the digests into a single array in the index.json file', async done => {
    const expectedObject = {
      digests: [ newer, older ]
    };

    await build(TMP_DIR, TMP_DIR);

    fs.readFile(path.join(TMP_DIR, 'index.json'), (err, data) => {
      expect(JSON.parse(data)).toEqual(expectedObject);
      done();
    });
  });

  afterEach(done => rimraf(TMP_DIR, done));
});