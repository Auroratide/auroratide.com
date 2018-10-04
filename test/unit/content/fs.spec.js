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

  describe('parseAllInDir', () => {
    beforeEach(done => {
      rimraf.sync(DIR);

      mkdirp(DIR, () => {
        mkdirp.sync(path.join(DIR, 'file-1'));
        mkdirp.sync(path.join(DIR, 'file-2'));

        realFs.writeFileSync(path.join(DIR, 'file-1', 'meta.json'), JSON.stringify({ id: '1' }));
        realFs.writeFileSync(path.join(DIR, 'file-2', 'meta.json'), JSON.stringify({ id: '2' }));

        realFs.writeFileSync(path.join(DIR, 'file-1', 'content.md'), 'Content');
        realFs.writeFileSync(path.join(DIR, 'file-2', 'content.md'), 'Content');

        done();
      });
    });

    it('should parse each file in the directory as Json', async () => {
      const objects = await fs.parseAllInDir(DIR);

      expect(objects).toHaveLength(2);
      expect(objects.map(o => o.id)).toContain('1');
      expect(objects.map(o => o.id)).toContain('2');
    });

    it('should parse the content into the content field', async () => {
      const objects = await fs.parseAllInDir(DIR);

      expect(objects).toHaveLength(2);
      expect(objects[0].content).toBeDefined();
      expect(objects[1].content).toBeDefined();
    });

    it('should not parse content if the content file is missing', async () => {
      mkdirp.sync(path.join(DIR, 'file-3'));
      realFs.writeFileSync(path.join(DIR, 'file-3', 'meta.json'), JSON.stringify({ id: '3' }));

      const objects = await fs.parseAllInDir(DIR);

      expect(objects).toHaveLength(3);
      expect(objects[2].content).toBeUndefined();
    });
  });
});