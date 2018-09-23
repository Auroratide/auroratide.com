import { inject } from 'mobx-react';

const storeToProps = ({ store }) => ( {
  postsStore: store.posts
} );

export default inject(storeToProps);