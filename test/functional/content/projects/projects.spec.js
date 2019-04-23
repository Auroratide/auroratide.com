import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import build from 'Content/projects/steps';
import ProjectDataBuilder from 'Test/utils/builders/ProjectDataBuilder';

describe('Build Projects Functional', () => {

  const TMP_DIR = path.join(__dirname, 'tmp');

  let older;
  let newer;

  beforeEach(() => {
    older = createProject('older', '2018-05-27T00:00:00Z');
    newer = createProject('newer', '2018-05-28T00:00:00Z');
  });

  it('should write the projects into a single array in the index.json file', async done => {
    const strip = project => {
      const { content, summary, links, ...rest } = project; // eslint-disable-line
      return rest;
    };

    const expectedObject = {
      projects: [ strip(newer), strip(older) ]
    };

    await build(TMP_DIR, TMP_DIR);

    fs.readFile(path.join(TMP_DIR, 'index.json'), (err, data) => {
      expect(JSON.parse(data)).toEqual(expectedObject);
      done();
    });
  });

  it('should write a file for each project', async done => {
    await build(TMP_DIR, TMP_DIR);

    fs.readFile(path.join(TMP_DIR, 'older.json'), (err, data) => {
      expect(JSON.parse(data)).toEqual(older);
      done();
    });
  });

  afterEach(done => rimraf(TMP_DIR, done));

  const createProject = (id, date) => {
    const project = new ProjectDataBuilder()
      .withId(id)
      .withDate(date)
      .build();

    mkdirp.sync(path.join(TMP_DIR, id));
    fs.writeFileSync(path.join(TMP_DIR, id, 'meta.json'), JSON.stringify(project));
    fs.writeFileSync(path.join(TMP_DIR, id, 'content.md'), 'Content');
    fs.writeFileSync(path.join(TMP_DIR, id, 'summary.md'), 'Summary');

    return project;
  };
});