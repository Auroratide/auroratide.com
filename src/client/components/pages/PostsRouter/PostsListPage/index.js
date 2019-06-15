import PostsContext from 'Client/components/context/PostsContext';
import PostsListPage from './PostsListPage';
import withResourceList from 'Client/components/core/with-resource-list';

export default withResourceList(PostsContext)(PostsListPage);
