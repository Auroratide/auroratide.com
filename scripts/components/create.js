#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const mkdirp = require('mkdirp');
const {
    nameFromPath,
    toCamelCase,
    toKebabCase
} = require('./helpers');

let componentPath = null;
let isWebComponent = false;

program
    .version('0.1.1')
    .option('-w, --web-component', 'make a web component')
    .arguments('<path>')
    .action(p => componentPath = p)
    .parse(process.argv);

const options = program.opts()
isWebComponent = options.webComponent

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

const templateToUse = path.join(__dirname, 'templates', isWebComponent ? 'web-component' : 'standard');

const ENCODING = { encoding: 'utf-8' };
const SRC_PATH = path.join('src', isWebComponent ? 'components' : 'client');

mkdirp.sync(path.join(SRC_PATH, componentPath));

fs.readdirSync(templateToUse).forEach(filename => {
    const contents = replaceNames(fs.readFileSync(path.join(templateToUse, filename), ENCODING))
    fs.writeFileSync(path.join(SRC_PATH, componentPath, replaceNames(filename)), contents, ENCODING)
})

console.log(`${name} created successfully!`)
