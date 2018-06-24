import zaha, { is } from 'zaha';
import Colors from 'Client/config/colors';

export default zaha({
  id: is.string(),
  title: is.string(),
  by: is.string(),
  category: is.string(),
  summary: is.string(),
  icon: is.string(),
  color: is.oneOf(Colors.list()),
  link: is.string()
});