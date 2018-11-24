import { observer } from 'mobx-react';
import Textarea from './Textarea';
import State from './state';

const component = observer(Textarea);
component.State = State;

export default component;