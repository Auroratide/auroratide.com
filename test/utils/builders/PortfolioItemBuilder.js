import zaha, { is } from 'zaha';
import Colors from 'Client/config/colors';

export default zaha({
  id: is.string(),
  title: is.string(),
  category: is.string(),
  image: is.string(),
  date: is.datestring(),
  dateRange: is.string(),
  summary: is.array(),
  content: is.array(),
  links: is.arrayOf(is.object({
    title: is.string(),
    href: is.string(),
    icon: is.string(),
    color: is.oneOf(Colors.list())
  })),
  gallery: is.arrayOf(is.object({
    image: is.string(),
    caption: is.string()
  }))
});
