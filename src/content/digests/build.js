/* eslint-disable no-console */
const path = require('path');
const build = require('./steps');

const DIGESTS_PATH = path.join('content', 'digests');
const PUBLIC_PATH = path.join('public', 'api', 'digests');

try {
  const startTime = new Date().getTime();
  console.log('Starting to build digests...');

  build(DIGESTS_PATH, PUBLIC_PATH);

  const endTime = new Date().getTime();
  const elapsedMilliseconds = endTime - startTime;
  console.log(`Successfully build digests in ${elapsedMilliseconds / 1000} seconds!`);
} catch(error) {
  console.error('ERROR: Digests could not be built.', error);
  process.exit(1);
}
