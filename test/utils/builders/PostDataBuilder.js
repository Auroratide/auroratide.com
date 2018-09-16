import zaha, { is } from 'zaha';

export default zaha({
  id: is.string(),
  title: is.string(),
  category: is.string(),
  summary: is.string(),
  icon: is.string(),
  color: is.string(),
  published_at: is.string(),
  content: is.object()
});