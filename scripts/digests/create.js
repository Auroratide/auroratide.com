#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const { exec } = require('child_process');
const program = require('commander');

let slug = null;

program
  .version('0.1.0')
  .arguments('<slug>')
  .action(s => slug = s)
  .parse(process.argv);

if(!slug) {
  console.error('ERROR: Slug is required');
  process.exit(1);
}

const ENCODING = { encoding: 'utf-8' };
const META_PATH = path.join(__dirname, '_meta.json');
const TEMPLATE_PATH = path.join(__dirname, 'templates', 'meta.json');
const DIGEST_PATH = path.join('content', 'digests', slug);

if(fs.existsSync(DIGEST_PATH)) {
  console.error('ERROR: Digest with this name already exists');
  process.exit(1);
}

const meta = JSON.parse(fs.readFileSync(META_PATH, ENCODING));
const id = meta.next_id;

const digestTemplate = fs.readFileSync(TEMPLATE_PATH, ENCODING);
const date = new Date().toISOString();

const replaceNames = content => content
  .replace(/\$ID\$/g, id)
  .replace(/\$DATE\$/g, date);

const digestContent = replaceNames(digestTemplate);

mkdirp.sync(DIGEST_PATH);
fs.writeFileSync(path.join(DIGEST_PATH, 'meta.json'), digestContent);

if(!fs.existsSync(DIGEST_PATH)) {
  console.error('ERROR: Digest failed to save');
  process.exit(1);
}

const nextId = (parseInt(id) + 1).toString();
meta.next_id = nextId;
meta.digests[id] = slug;

fs.writeFileSync(META_PATH, JSON.stringify(meta, null, 2));

console.log(`Digest ${slug} created successfully!`);

exec(`open ${DIGEST_PATH}/meta.json`);