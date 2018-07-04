import React from 'react';

const withTag = tag => Component => props => <Component tag={tag} {...props} />;

export default Component => {
  Component.figure = withTag('figure')(Component);
  Component.p = withTag('p')(Component);
  Component.small = withTag('small')(Component);

  return Component;
};