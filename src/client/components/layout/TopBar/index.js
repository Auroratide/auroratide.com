import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import TopBar from './TopBar';
import container from './container';

export default withRouter(container(observer(TopBar)));
