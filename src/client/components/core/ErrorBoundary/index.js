import { observer } from 'mobx-react';
import container from './container';
import ErrorBoundary from './ErrorBoundary';

export default container(observer(ErrorBoundary));