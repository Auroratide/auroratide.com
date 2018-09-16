import req from './req';

const map = raw => ( {
  id: raw.id,
  title: raw.title,
  category: raw.category,
  summary: raw.summary,
  icon: raw.icon,
  color: raw.color,
  content: raw.content
} );

export const get = (id) => req.get(`/posts/${id}.json`)
  .then(res => res.data)
  .then(map);