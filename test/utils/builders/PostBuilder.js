import zaha, { is } from 'zaha';
import Colors from 'Client/config/colors';

export default zaha({
  id: is.string(),
  title: is.string(),
  category: is.string(),
  summary: is.string(),
  icon: is.string(),
  color: is.oneOf(Colors.list()),
  publishedAt: is.string(),
  content: is.object()
});