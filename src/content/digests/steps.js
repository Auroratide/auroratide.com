const fs = require('../fs');

const sortByCreatedAt = (digestsList) => digestsList.sort((lhs, rhs) => {
  const lhsDate = new Date(lhs.created_at).getTime();
  const rhsDate = new Date(rhs.created_at).getTime();
  return rhsDate - lhsDate;
});

module.exports = async (digestsPath, publicPath) => {
  const digests = await fs.parseAllInDir(digestsPath).then(raw => raw.map(r => r.digest));
  sortByCreatedAt(digests);
  await fs.saveAsJson(publicPath, 'index', { digests });
};