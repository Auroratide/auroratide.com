import req from './req';

const mapDigest = raw => ( {
  id: raw.id,
  title: raw.title,
  by: raw.by,
  category: raw.category,
  summary: raw.summary,
  icon: raw.icon,
  color: raw.color,
  link: raw.link
} );

export const getAll = () => req.get('/digests/index.json')
  .then(res => res.data)
  .then(data => data.digests.map(mapDigest));