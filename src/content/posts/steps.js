const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const getListOfPostFiles = (path) => fs.readdirSync(path);

const parsePost = (path) => JSON.parse(fs.readFileSync(path, 'utf-8')).post;

const sortByPublishedAt = (postsList) => postsList.sort((lhs, rhs) => {
  const lhsDate = new Date(lhs.published_at).getTime();
  const rhsDate = new Date(rhs.published_at).getTime();
  return rhsDate - lhsDate;
});

const ensureFolderExists = (folder) => mkdirp.sync(folder);

const savePost = (publicPath, post) => fs.writeFileSync(path.join(publicPath, `${post.id}.json`), JSON.stringify(post));

module.exports = (postsPath, publicPath) => {
  const postFiles = getListOfPostFiles(postsPath);
  const posts = postFiles.map(file => parsePost(path.join(postsPath, file)));
  sortByPublishedAt(posts);
  ensureFolderExists(publicPath);
  posts.forEach(post => savePost(publicPath, post));
};