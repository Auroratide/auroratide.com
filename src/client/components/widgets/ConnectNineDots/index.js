import { inject, observer } from 'mobx-react';
import State from './state';
import ConnectNineDots from './ConnectNineDots';

const storeToProps = () => ( {
  state: new State()
} );

export default inject(storeToProps)(observer(ConnectNineDots));
