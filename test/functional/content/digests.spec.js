import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import build from 'Content/digests/steps';
import { DigestDataBuilder } from 'Test/utils/builders/DigestsResponseBuilder';

describe('Build Digests Functional', () => {

  const TMP_DIR = path.join(__dirname, 'tmp');

  let newerDigest;
  let olderDigest;
  
  beforeEach(done => {
    newerDigest = new DigestDataBuilder()
      .withCreated_at('2018-05-27T00:00:00Z')
      .build();

    olderDigest = new DigestDataBuilder()
      .withCreated_at('2018-05-26T00:00:00Z')
      .build();

    mkdirp(TMP_DIR, () => {
      fs.writeFileSync(path.join(TMP_DIR, 'newer.json'), JSON.stringify({ digest: newerDigest }));
      fs.writeFileSync(path.join(TMP_DIR, 'older.json'), JSON.stringify({ digest: olderDigest }));
      done();
    });
  });
  
  it('should write the digests into a single array in the index.json file', done => {
    const expectedObject = {
      digests: [ newerDigest, olderDigest ]
    };

    build(TMP_DIR, TMP_DIR);

    fs.readFile(path.join(TMP_DIR, 'index.json'), (err, data) => {
      expect(JSON.parse(data)).toEqual(expectedObject);
      done();
    });
  });

  afterEach(done => rimraf(TMP_DIR, done));
});