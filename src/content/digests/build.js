const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const DIGEST_PATH = path.join('content', 'digests', 'index-as-key-is-an-antipattern.json');
const ENCODING = { encoding: 'utf-8' };

const digestContents = fs.readFileSync(DIGEST_PATH, ENCODING);
const digest = JSON.parse(digestContents).digest;

const digestsObject = {
  digests: [ digest ]
};

const PUBLIC_PATH = path.join('public', 'api', 'digests');
mkdirp.sync(PUBLIC_PATH);

fs.writeFileSync(path.join(PUBLIC_PATH, 'index.json'), JSON.stringify(digestsObject));