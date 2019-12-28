import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import useAsync from '@auroratide/use-async';
import withId from './with-id';
import PostPage from './PostPage';
import PostsContext from 'Client/components/context/PostsContext';

import withResourceItem from 'Client/components/core/with-resource-item';

const WithListLoading = props => {
  useAsync(props.resource.refreshList).andCall();
  return <PostPage {...props} />;
};

WithListLoading.propTypes = {
  resource: PropTypes.shape({
    refreshList: PropTypes.func
  })
};

export default withId(withResourceItem(PostsContext)(WithListLoading));
