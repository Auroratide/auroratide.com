import req from './req';
import { UrlBuilder } from 'Client/config/links';

const url = new UrlBuilder().apiFor();

const link = raw => ( {
  title: raw.title,
  href: raw.href,
  icon: raw.icon,
  color: raw.color
} );

const galleryImage = raw => ( {
  image: raw.image,
  caption: raw.caption
} );

const map = raw => ( {
  id: raw.id,
  title: raw.title,
  category: raw.category,
  image: raw.image,
  date: raw.date,
  dateRange: raw.date_range,
  links: raw.links ? raw.links.map(link) : [],
  gallery: raw.gallery ? raw.gallery.map(galleryImage) : [],
  summary: raw.summary,
  content: raw.content
} );

export const get = (id) => req.get(url.portfolioItem(id))
  .then(res => res.data)
  .then(map);

export const getAll = () => req.get(url.portfolio())
  .then(res => res.data)
  .then(data => data.portfolio.map(map));