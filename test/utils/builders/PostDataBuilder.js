import zaha, { is } from 'zaha';

const Base =  zaha({
  id: is.string(),
  title: is.string(),
  category: is.string(),
  summary: is.string(),
  icon: is.string(),
  color: is.string(),
  published_at: is.datestring(),
  content: is.object()
});

export default class PostsDataBuilder extends Base {
  withoutContent() {
    this.schema.content = is(undefined);
    return this;
  }
}