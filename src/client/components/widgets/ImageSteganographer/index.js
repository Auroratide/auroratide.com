import { inject, observer } from 'mobx-react';
import State from './state';
import ImageSteganographer from './ImageSteganographer';

const storeToProps = () => ( {
  state: new State()
} );

export default inject(storeToProps)(observer(ImageSteganographer));
