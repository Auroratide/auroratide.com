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
const TEMPLATE_PATH = path.join(__dirname, 'templates', 'meta.json');
const PATH = path.join('content', 'portfolio', slug);

if(fs.existsSync(PATH)) {
  console.error('ERROR: Project with this name already exists');
  process.exit(1);
}

const metaTemplate = fs.readFileSync(TEMPLATE_PATH, ENCODING);
const date = new Date().toISOString();

const replaceNames = content => content
  .replace(/\$SLUG\$/g, slug)
  .replace(/\$DATE\$/g, date);

const metaContent = replaceNames(metaTemplate);

mkdirp.sync(PATH);
fs.writeFileSync(path.join(PATH, 'meta.json'), metaContent);
fs.writeFileSync(path.join(PATH, 'content.md'), '');
fs.writeFileSync(path.join(PATH, 'summary.md'), '');

if(!fs.existsSync(PATH)) {
  console.error('ERROR: Project failed to save');
  process.exit(1);
}

console.log(`Project ${slug} created successfully!`);

exec(`open ${PATH}/meta.json`);