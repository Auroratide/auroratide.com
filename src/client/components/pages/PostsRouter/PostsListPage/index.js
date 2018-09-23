import { observer } from 'mobx-react';
import container from './container';
import PostsListPage from './PostsListPage';

export default container(observer(PostsListPage));
