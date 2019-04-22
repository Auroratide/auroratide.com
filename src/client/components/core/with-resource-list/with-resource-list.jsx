import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { renderIfElse } from 'Client/utils/render-if';
import ResourceStore from 'Client/store/resource-store';
import Loading from 'Client/components/core/Loading';

export default Component => class extends React.Component {
  static propTypes = {
    store: PropTypes.instanceOf(ResourceStore).isRequired
  };

  componentDidMount() {
    this.props.store.refreshList();
  }

  render() {
    const store = this.props.store;
    const shouldShowLoading = store.isEmpty && store.isRefreshing;
    return renderIfElse(shouldShowLoading, () =>
      <Loading text='Fetching...' />
    ).elseRender(() =>
      <Component store={store} />
    );
  }
};
