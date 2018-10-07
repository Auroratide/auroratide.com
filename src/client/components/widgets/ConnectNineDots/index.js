import { inject, observer } from 'mobx-react';
import State from './state';
import ConnectNineDots from './ConnectNineDots';

const storeToProps = () => ( {
  state: new State(4)
} );

export default inject(storeToProps)(observer(ConnectNineDots));
