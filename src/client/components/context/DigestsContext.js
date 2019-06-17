import * as api from 'Client/api/digests';
import ResourceContext from './ResourceContext';

export const sorter = {
  byIdReversed: (lhs, rhs) => rhs.id - lhs.id
};

export default ResourceContext.create(api);