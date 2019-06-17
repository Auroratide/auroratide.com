import * as api from 'Client/api/posts';
import ResourceContext from 'Client/components/context/ResourceContext';

export const sorter = {
  byPublishedDate: (lhs, rhs) => new Date(rhs.publishedAt) - new Date(lhs.publishedAt)
};

export const filter = {
  withCategory: category => post => post.category === category,
  without: id => post => post.id !== id,
  top: n => (_, index) => index < n,
  published: () => post => post.publishedAt && post.publishedAt !== ''
};

export default ResourceContext.create(api);