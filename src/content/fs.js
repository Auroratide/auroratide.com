const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const parse = require('./md-parser');

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

const parseAllInDirAsContent = dir => {
  return new Promise((resolve, reject) => fs.readdir(dir, (err, files) => {
    err ? reject(err) : resolve(files);
  })).then(files => {
    return Promise.all(files.map(file => {
      return new Promise((resolve, reject) => fs.readFile(path.join(dir, file, 'meta.json'), 'utf-8', (err, obj) => {
        err ? reject(err) : resolve(JSON.parse(obj));
      })).then(obj => {
        return new Promise((resolve, reject) => fs.readFile(path.join(dir, file, 'content.md'), 'utf-8', (err, content) => {
          err ? reject(err) : resolve({ content: parse(content), ...obj });
        }));
      });
    }));
  });
};

module.exports = {
  parseAllInDir,
  saveAsJson,
  parseAllInDirAsContent
};