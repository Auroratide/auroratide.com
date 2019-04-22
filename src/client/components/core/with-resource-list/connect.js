import { inject } from 'mobx-react';

const storeToProps = getStore => ({ store }) => ( {
  store: getStore(store)
} );

export default getStore => inject(storeToProps(getStore));