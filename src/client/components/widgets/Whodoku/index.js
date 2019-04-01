import { inject, observer } from 'mobx-react';
import State from './state';
import Whodoku from './Whodoku';

const storeToProps = () => ( {
  state: new State()
} );

export default inject(storeToProps)(observer(Whodoku));
