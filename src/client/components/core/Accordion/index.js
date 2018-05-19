import { observer } from 'mobx-react';
import Accordion from './Accordion';
import State from './state';

const component = observer(Accordion);
component.State = State;

export default component;