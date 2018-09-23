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
const POST_PATH = path.join('content', 'posts', slug);

if(fs.existsSync(POST_PATH)) {
  console.error('ERROR: Post with this name already exists');
  process.exit(1);
}

const metaTemplate = fs.readFileSync(TEMPLATE_PATH, ENCODING);
const date = new Date().toISOString();

const replaceNames = content => content
  .replace(/\$SLUG\$/g, slug)
  .replace(/\$DATE\$/g, date);

const metaContent = replaceNames(metaTemplate);

mkdirp.sync(POST_PATH);
fs.writeFileSync(path.join(POST_PATH, 'meta.json'), metaContent);
fs.writeFileSync(path.join(POST_PATH, 'content.md'), '');

if(!fs.existsSync(POST_PATH)) {
  console.error('ERROR: Post failed to save');
  process.exit(1);
}

console.log(`Post ${slug} created successfully!`);

exec(`open ${POST_PATH}/meta.json`);