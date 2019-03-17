const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const parse = require('./md-parser');

const readdir = dir => new Promise((resolve, reject) => fs.readdir(dir, (err, data) => {
  err ? reject(err) : resolve(data);
}));

const readFile = file => new Promise((resolve, reject) => fs.readFile(file, 'utf-8', (err, data) => {
  err ? reject(err) : resolve(data);
}));

const ensureDirExists = dir => new Promise((resolve, reject) => mkdirp(dir, err => {
  err ? reject(err) : resolve();
}));

const writeFile = (file, data) => new Promise((resolve, reject) => fs.writeFile(file, data, err => {
  err ? reject(err) : resolve();
}));

const saveAsJson = async (dir, name, obj) => {
  await ensureDirExists(dir);
  return writeFile(path.join(dir, `${name}.json`), JSON.stringify(obj));
};

const parseAllInDir = async dir => {
  const entries = await readdir(dir);
  return Promise.all(entries.map(async entry => {
    const entryPath = path.join(dir, entry);
    let obj = JSON.parse(await readFile(path.join(entryPath, 'meta.json')));

    const files = await readdir(entryPath);
    for(const file of files) {
      const match = file.match(/^([a-z0-9_]+)\.md$/);

      if(match) {
        const fieldName = match[1];
        obj = { [fieldName]: parse(await readFile(path.join(entryPath, file))), ...obj };
      }
    }

    return obj;
  }));
};

module.exports = {
  saveAsJson,
  parseAllInDir
};