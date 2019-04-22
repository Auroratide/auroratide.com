import { observer } from 'mobx-react';
import connect from './connect';
import withResourceList from './with-resource-list';

export default getStore =>
  Component =>
    connect(getStore)(observer(withResourceList(observer(Component))));