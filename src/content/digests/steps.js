const fs = require('fs');
const mkdirp = require('mkdirp');

module.exports.getListOfDigestFiles = (path) => fs.readdirSync(path);

module.exports.parseDigest = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

module.exports.sortByCreatedAt = (digestsList) => digestsList.sort((lhs, rhs) => {
  const lhsDate = new Date(lhs.created_at).getTime();
  const rhsDate = new Date(rhs.created_at).getTime();
  return rhsDate - lhsDate;
});

module.exports.ensureFolderExists = (folder) => mkdirp.sync(folder);

module.exports.saveDigests = (path, digestsObject) => fs.writeFileSync(path, JSON.stringify(digestsObject));