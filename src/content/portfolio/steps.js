const fs = require('../fs');

const sortByDate = (postsList) => postsList.sort((lhs, rhs) => {
  const lhsDate = new Date(lhs.date).getTime();
  const rhsDate = new Date(rhs.date).getTime();
  return rhsDate - lhsDate;
});

const strip = items => items.map(item => {
  const {
    content, summary, links, gallery, // eslint-disable-line
    ...rest
  } = item;
  return rest;
});

module.exports = async (projectsPath, publicPath) => {
  const portfolio = await fs.parseAllInDir(projectsPath);
  sortByDate(portfolio);
  await fs.saveAsJson(publicPath, 'index', { portfolio: strip(portfolio) });
  await Promise.all(portfolio.map(async project => await fs.saveAsJson(publicPath, project.id, project)));
};