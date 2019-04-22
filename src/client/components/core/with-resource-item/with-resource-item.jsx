import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { renderIfElse } from 'Client/utils/render-if';
import ResourceStore from 'Client/store/resource-store';
import Loading from 'Client/components/core/Loading';
import PageNotFound from 'Client/components/pages/PageNotFound';

export default Component => class extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    store: PropTypes.instanceOf(ResourceStore).isRequired
  };

  componentDidMount() {
    this.props.store.refreshDetails(this.props.id);
  }

  componentDidUpdate() {
    const { store, id } = this.props;
    const item = store.get(id);
    if(!store.isRefreshing && item && !item.content)
      store.refreshDetails(id);
  }

  render() {
    const { store, id } = this.props;
    const item = store.get(id);

    return renderIfElse(item, () =>
      <Component store={store} id={id} item={item} />
    ).elseRender(() => renderIfElse(store.isRefreshing, () =>
      <Loading text='Fetching...' />
    ).elseRender(() =>
      <PageNotFound />
    ));
  }
};
