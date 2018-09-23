import path from 'path';
import realFs from 'fs';
import * as fs from 'Content/fs';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';

describe('fs', () => {
  const DIR = path.join(__dirname, 'sample');

  beforeEach(done => {
    mkdirp(DIR, () => {
      realFs.writeFileSync(path.join(DIR, 'file-1.json'), JSON.stringify({ id: '1' }));
      realFs.writeFileSync(path.join(DIR, 'file-2.json'), JSON.stringify({ id: '2' }));
      done();
    });
  });

  afterEach(done => rimraf(DIR, done));

  describe('parseAllInDir', () => {
    it('should parse each file in the directory as Json', async () => {
      const objects = await fs.parseAllInDir(DIR);

      expect(objects).toHaveLength(2);
      expect(objects.map(o => o.id)).toContain('1');
      expect(objects.map(o => o.id)).toContain('2');
    });
  });

  describe('saveAsJson', () => {
    const TMP = path.join(__dirname, 'tmp');

    afterEach(done => rimraf(TMP, done));

    it('should save the object in the given location', async () => {
      const obj = { id: '3' };
      await fs.saveAsJson(TMP, 'index', obj);

      const file = realFs.readFileSync(path.join(TMP, 'index.json'), 'utf-8');
      expect(file).toContain('"id":"3"');
    });
  });
});