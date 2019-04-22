import withResourceList from 'Client/components/core/with-resource-list';
import PostsListPage from './PostsListPage';

export default withResourceList(store => store.posts)(PostsListPage);
