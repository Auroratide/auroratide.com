const fs = require('../fs');

const sortByPublishedAt = (postsList) => postsList.sort((lhs, rhs) => {
  const lhsDate = new Date(lhs.published_at).getTime();
  const rhsDate = new Date(rhs.published_at).getTime();
  return rhsDate - lhsDate;
});

const stripOffContent = posts => posts.map(post => {
  const { content, ...rest } = post; // eslint-disable-line
  return rest;
});

module.exports = async (postsPath, publicPath) => {
  const posts = await fs.parseAllInDirAsContent(postsPath).then(raw => raw.map(r => r.post));
  sortByPublishedAt(posts);
  await fs.saveAsJson(publicPath, 'index', { posts: stripOffContent(posts) });
  await Promise.all(posts.map(async post => await fs.saveAsJson(publicPath, post.id, post)));
};