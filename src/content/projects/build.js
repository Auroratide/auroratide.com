/* eslint-disable no-console */
const path = require('path');
const build = require('./steps');

const PROJECTS_PATH = path.join('content', 'projects');
const PUBLIC_PATH = path.join('public', 'api', 'projects');

const startTime = new Date().getTime();
console.log('Starting to build projects...');

build(PROJECTS_PATH, PUBLIC_PATH).then(() => {
  const endTime = new Date().getTime();
  const elapsedMilliseconds = endTime - startTime;
  console.log(`Successfully built projects in ${elapsedMilliseconds / 1000} seconds!`);
}).catch(error => {
  console.error('ERROR: Projects could not be built.', error);
  process.exit(1);
});
