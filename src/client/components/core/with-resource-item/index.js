import withResourceItem from './with-resource-item';

export default context =>
  Component =>
    context.withResource(withResourceItem(Component));