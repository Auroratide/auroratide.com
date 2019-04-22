import { observer } from 'mobx-react';
import connect from './connect';
import withResourceItem from './with-resource-item';

export default getStore =>
  Component =>
    connect(getStore)(observer(withResourceItem(observer(Component))));