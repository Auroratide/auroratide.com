import { inject } from 'mobx-react';
import State from './state';

const storeToProps = () => ( {
  status: new State()
} );

export default inject(storeToProps);
