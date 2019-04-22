import withId from './with-id';
import PostPage from './PostPage';

import withResourceItem from 'Client/components/core/with-resource-item';

export default withId(withResourceItem(store => store.posts)(PostPage));
