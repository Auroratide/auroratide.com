#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const {
  basePath,
  nameFromPath,
  toCamelCase,
  toKebabCase
} = require('./helpers');

let componentPath = null;

program
  .version('0.1.0')
  .option('-s, --styled', 'Add styling')
  .arguments('<path>')
  .action(p => componentPath = p)
  .parse(process.argv);

if(!componentPath) {
  console.error('ERROR: Component path is required');
  process.exit(1);
}

const name = nameFromPath(componentPath);
const camelName = toCamelCase(name);
const kebabName = toKebabCase(name);

const replaceNames = content => content
  .replace(/\$NAME\$/g, name)
  .replace(/\$KEBAB_NAME\$/g, kebabName)
  .replace(/\$CAMEL_NAME\$/g, camelName)
  .replace(/\$PATH\$/g, componentPath);

const templateToUse = program.styled ? 'styled' : 'unstyled';

const componentTemplatePath = path.join(__dirname, 'templates', templateToUse, 'Component.jsx');
const testTemplatePath = path.join(__dirname, 'templates', templateToUse, 'Component.spec.jsx');
const indexTemplatePath = path.join(__dirname, 'templates', templateToUse, 'index.js');

const ENCODING = 'utf-8';
const SRC_PATH = path.join('src', 'client', 'components');
const TEST_PATH = path.join('test', 'unit', 'client', 'components');

fs.mkdirSync(path.join(SRC_PATH, componentPath));

const componentContents = replaceNames(fs.readFileSync(componentTemplatePath, ENCODING));
const testContents = replaceNames(fs.readFileSync(testTemplatePath, ENCODING));
const indexContents = replaceNames(fs.readFileSync(indexTemplatePath, ENCODING));

fs.writeFileSync(path.join(SRC_PATH, componentPath, `${name}.jsx`), componentContents);
fs.writeFileSync(path.join(SRC_PATH, componentPath, 'index.js'), indexContents);
fs.writeFileSync(path.join(TEST_PATH, basePath(componentPath), `${name}.spec.jsx`), testContents);

if(program.styled) {
  const styleTemplatePath = path.join(__dirname, 'templates', 'styled', 'style.css');
  const styleContents = replaceNames(fs.readFileSync(styleTemplatePath, ENCODING));
  fs.writeFileSync(path.join(SRC_PATH, componentPath, 'style.css'), styleContents);
}

console.log(`${name} created successfully!`);