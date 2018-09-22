import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import container from './container';
import PostPage from './PostPage';

export default withRouter(container(observer(PostPage)));