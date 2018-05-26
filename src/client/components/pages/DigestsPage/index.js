import { observer } from 'mobx-react';
import container from './container';
import DigestsPage from './DigestsPage';

export default container(observer(DigestsPage));