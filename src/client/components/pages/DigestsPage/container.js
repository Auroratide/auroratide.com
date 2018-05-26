import { inject } from 'mobx-react';

const storeToProps = ({ store }) => ( {
  digestsStore: store.digests
} );

export default inject(storeToProps);
