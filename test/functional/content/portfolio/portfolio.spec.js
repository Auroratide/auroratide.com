import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import build from 'Content/portfolio/steps';
import ProjectDataBuilder from 'Test/utils/builders/PortfolioItemDataBuilder';

describe('Build Portfolio Functional', () => {

  const TMP_DIR = path.join(__dirname, 'tmp');

  let older;
  let newer;

  beforeEach(() => {
    older = createPortfolio('older', '2018-05-27T00:00:00Z');
    newer = createPortfolio('newer', '2018-05-28T00:00:00Z');
  });

  it('should write the portfolio into a single array in the index.json file', async done => {
    const strip = portfolioItem => {
      const { content, summary, links, gallery, ...rest } = portfolioItem; // eslint-disable-line
      return rest;
    };

    const expectedObject = {
      portfolio: [ strip(newer), strip(older) ]
    };

    await build(TMP_DIR, TMP_DIR);

    fs.readFile(path.join(TMP_DIR, 'index.json'), (err, data) => {
      expect(JSON.parse(data)).toEqual(expectedObject);
      done();
    });
  });

  it('should write a file for each portfolio item', async done => {
    await build(TMP_DIR, TMP_DIR);

    fs.readFile(path.join(TMP_DIR, 'older.json'), (err, data) => {
      expect(JSON.parse(data)).toEqual(older);
      done();
    });
  });

  afterEach(done => rimraf(TMP_DIR, done));

  const createPortfolio = (id, date) => {
    const portfolioItem = new ProjectDataBuilder()
      .withId(id)
      .withDate(date)
      .build();

    mkdirp.sync(path.join(TMP_DIR, id));
    fs.writeFileSync(path.join(TMP_DIR, id, 'meta.json'), JSON.stringify(portfolioItem));
    fs.writeFileSync(path.join(TMP_DIR, id, 'content.md'), 'Content');
    fs.writeFileSync(path.join(TMP_DIR, id, 'summary.md'), 'Summary');

    return portfolioItem;
  };
});