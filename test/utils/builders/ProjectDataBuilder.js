import zaha, { is } from 'zaha';
import Colors from 'Client/config/colors';

const Base =  zaha({
  id: is.string(),
  title: is.string(),
  category: is.string(),
  image: is.string(),
  date: is.datestring(),
  date_range: is.string(),
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
    title: is.string()
  }))
});

export default class PostsDataBuilder extends Base {
  withoutContent() {
    this.schema.content = is(undefined);
    return this;
  }
}