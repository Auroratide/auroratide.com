import PostsContext from 'Client/components/context/PostsContext';
import PostsRouter from './PostsRouter';
import { withRouter } from 'react-router-dom';

export default withRouter(PostsContext.withProvider(PostsRouter));