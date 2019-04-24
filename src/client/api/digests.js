import req from './req';
import { UrlBuilder } from 'Client/config/links';

const url = new UrlBuilder().apiFor();

const mapDigest = raw => ( {
  id: raw.id,
  title: raw.title,
  by: raw.by,
  category: raw.category,
  summary: raw.summary,
  icon: raw.icon,
  color: raw.color,
  link: raw.link,
  source: raw.source
} );

export const getAll = () => req.get(url.digests())
  .then(res => res.data)
  .then(data => data.digests.map(mapDigest));