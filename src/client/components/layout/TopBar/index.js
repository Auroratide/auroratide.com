import { observer } from 'mobx-react';
import TopBar from './TopBar';
import container from './container';

export default container(observer(TopBar));
