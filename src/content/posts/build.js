/* eslint-disable no-console */
const path = require('path');
const build = require('./steps');

const POSTS_PATH = path.join('content', 'posts');
const PUBLIC_PATH = path.join('public', 'api', 'posts');

const startTime = new Date().getTime();
console.log('Starting to build posts...');

build(POSTS_PATH, PUBLIC_PATH).then(() => {
  const endTime = new Date().getTime();
  const elapsedMilliseconds = endTime - startTime;
  console.log(`Successfully build posts in ${elapsedMilliseconds / 1000} seconds!`);
}).catch(error => {
  console.error('ERROR: Posts could not be built.', error);
  process.exit(1);
});
