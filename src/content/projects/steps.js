const fs = require('../fs');

module.exports = async (projectsPath, publicPath) => {
  const projects = await fs.parseAllInDir(projectsPath);
  await Promise.all(projects.map(async project => await fs.saveAsJson(publicPath, project.id, project)));
};