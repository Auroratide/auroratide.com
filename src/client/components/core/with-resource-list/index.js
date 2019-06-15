import withResourceList from './with-resource-list';

export default context =>
  Component =>
    context.withResource(withResourceList(Component));