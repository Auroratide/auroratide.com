/* eslint-disable no-console */
const path = require('path');
const {
  getListOfDigestFiles,
  parseDigest,
  sortByCreatedAt,
  ensureFolderExists,
  saveDigests
} = require('./steps');

const DIGESTS_PATH = path.join('content', 'digests');
const PUBLIC_PATH = path.join('public', 'api', 'digests');

try {
  const startTime = new Date().getTime();

  console.log('Starting to build digests...');

  const digestFiles = getListOfDigestFiles(DIGESTS_PATH);
  const digests = digestFiles.map(file => parseDigest(path.join(DIGESTS_PATH, file)));
  sortByCreatedAt(digests);
  ensureFolderExists(PUBLIC_PATH);
  saveDigests(path.join(PUBLIC_PATH, 'index.json'), { digests });

  const endTime = new Date().getTime();
  const elapsedMilliseconds = endTime - startTime;

  console.log(`Successfully build digests in ${elapsedMilliseconds / 1000} seconds!`);
} catch(error) {
  console.error('ERROR: Digests could not be built.', error);
  process.exit(1);
}
