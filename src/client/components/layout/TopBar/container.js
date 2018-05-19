import { inject } from 'mobx-react';
import Accordion from 'Client/components/core/Accordion';

const storeToProps = () => ( {
  accordionState: new Accordion.State()
} );

export default inject(storeToProps);