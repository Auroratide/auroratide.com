import zaha, { is } from 'zaha';

export default zaha({
  id: is.string(),
  title: is.string(),
  by: is.string(),
  category: is.string(),
  summary: is.string(),
  icon: is.string(),
  color: is.string(),
  link: is.string(),
  created_at: is.string()
});