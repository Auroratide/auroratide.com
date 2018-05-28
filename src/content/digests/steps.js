const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const getListOfDigestFiles = (path) => fs.readdirSync(path);

const parseDigest = (path) => JSON.parse(fs.readFileSync(path, 'utf-8')).digest;

const sortByCreatedAt = (digestsList) => digestsList.sort((lhs, rhs) => {
  const lhsDate = new Date(lhs.created_at).getTime();
  const rhsDate = new Date(rhs.created_at).getTime();
  return rhsDate - lhsDate;
});

const ensureFolderExists = (folder) => mkdirp.sync(folder);

const saveDigests = (path, digestsObject) => fs.writeFileSync(path, JSON.stringify(digestsObject));

module.exports = (digestsPath, publicPath) => {
  const digestFiles = getListOfDigestFiles(digestsPath);
  const digests = digestFiles.map(file => parseDigest(path.join(digestsPath, file)));
  sortByCreatedAt(digests);
  ensureFolderExists(publicPath);
  saveDigests(path.join(publicPath, 'index.json'), { digests });
};