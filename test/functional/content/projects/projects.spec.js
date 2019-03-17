import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import build from 'Content/projects/steps';
import ProjectDataBuilder from 'Test/utils/builders/ProjectDataBuilder';

describe('Build Projects Functional', () => {

  const TMP_DIR = path.join(__dirname, 'tmp');

  let project;

  beforeEach(() => {
    project = new ProjectDataBuilder()
      .withId('project-id')
      .withDate('2018-05-27T00:00:00Z')
      .build();

    mkdirp.sync(path.join(TMP_DIR, 'project'));
    fs.writeFileSync(path.join(TMP_DIR, 'project', 'meta.json'), JSON.stringify(project));
    fs.writeFileSync(path.join(TMP_DIR, 'project', 'content.md'), 'Content');
    fs.writeFileSync(path.join(TMP_DIR, 'project', 'summary.md'), 'Summary');
  });

  it('should write a file for each project', async done => {
    await build(TMP_DIR, TMP_DIR);

    fs.readFile(path.join(TMP_DIR, 'project-id.json'), (err, data) => {
      expect(JSON.parse(data)).toEqual(project);
      done();
    });
  });

  afterEach(done => rimraf(TMP_DIR, done));
});