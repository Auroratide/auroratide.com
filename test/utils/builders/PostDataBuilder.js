import zaha, { is } from 'zaha';
import Colors from 'Client/config/colors';

const Base =  zaha({
  id: is.string(),
  title: is.string(),
  category: is.string(),
  summary: is.string(),
  icon: is.string(),
  color: is.oneOf(Colors.list()),
  published_at: is.datestring(),
  content: is.array()
});

export default class PostsDataBuilder extends Base {
  withoutContent() {
    this.schema.content = is(undefined);
    return this;
  }
}