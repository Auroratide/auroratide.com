import { observer } from 'mobx-react';
import State from './state';
import Square from './Square';

Square.State = State;

export default observer(Square);