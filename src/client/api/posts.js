import req from './req';
import { UrlBuilder } from 'Client/config/links';

const url = new UrlBuilder().apiFor();

const map = raw => ( {
  id: raw.id,
  title: raw.title,
  category: raw.category,
  summary: raw.summary,
  icon: raw.icon,
  color: raw.color,
  publishedAt: raw.published_at,
  content: raw.content
} );

export const get = (id) => req.get(url.post(id))
  .then(res => res.data)
  .then(map);

export const getAll = () => req.get(url.posts())
  .then(res => res.data)
  .then(data => data.posts.map(map));