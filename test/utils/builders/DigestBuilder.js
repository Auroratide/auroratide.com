import zaha, { is } from 'zaha';

export default zaha({
  title: is.string(),
  by: is.string(),
  category: is.string(),
  summary: is.string(),
  icon: is.string(),
  color: is.string(),
  link: is.string()
});