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

const exists = file => new Promise(resolve => fs.access(file, fs.constants.F_OK, err => {
  err ? resolve(false) : resolve(true);
}));

const parseAllInDir = dir => {
  return new Promise((resolve, reject) => fs.readdir(dir, (err, files) => {
    err ? reject(err) : resolve(files);
  })).then(files => {
    return Promise.all(files.map(file => {
      return new Promise((resolve, reject) => fs.readFile(path.join(dir, file), 'utf-8', (err, obj) => {
        err ? reject(err) : resolve(JSON.parse(obj));
      }));
    }));
  });
};

const saveAsJson = (dir, name, obj) => {
  return new Promise((resolve, reject) => mkdirp(dir, err => {
    err ? reject(err) : resolve();
  })).then(() => {
    return new Promise((resolve, reject) => fs.writeFile(path.join(dir, `${name}.json`), JSON.stringify(obj), err => {
      err ? reject(err) : resolve();
    }));
  });
};

const parseAllInDirAsContent = async dir => {
  const entries = await readdir(dir);
  return Promise.all(entries.map(async entry => {
    const obj = JSON.parse(await readFile(path.join(dir, entry, 'meta.json')));
    const contentPath = path.join(dir, entry, 'content.md');
    if(await exists(contentPath))
      return { content: parse(await readFile(contentPath)), ...obj };
    else
      return obj;
  }));
};

module.exports = {
  parseAllInDir,
  saveAsJson,
  parseAllInDirAsContent
};