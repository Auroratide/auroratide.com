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
  const projects = await fs.parseAllInDir(projectsPath);
  sortByDate(projects);
  await fs.saveAsJson(publicPath, 'index', { projects: strip(projects) });
  await Promise.all(projects.map(async project => await fs.saveAsJson(publicPath, project.id, project)));
};