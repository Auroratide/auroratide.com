import req from './req';

const link = raw => ( {
  title: raw.title,
  href: raw.href
} );

const map = raw => ( {
  id: raw.id,
  title: raw.title,
  category: raw.category,
  image: raw.image,
  date: raw.date,
  dateRange: raw.date_range,
  links: raw.links ? raw.links.map(link) : [],
  summary: raw.summary,
  content: raw.content
} );

export const get = (id) => req.get(`/projects/${id}.json`)
  .then(res => res.data)
  .then(map);

export const getAll = () => req.get('/projects/index.json')
  .then(res => res.data)
  .then(data => data.projects.map(map));