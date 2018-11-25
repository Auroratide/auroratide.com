import React from 'react';

const withTag = tag => Component => props => <Component tag={tag} {...props} />;

export default Component => {
  Component.article = withTag('article')(Component);
  Component.button = withTag('button')(Component);
  Component.figure = withTag('figure')(Component);
  Component.label = withTag('label')(Component);
  Component.p = withTag('p')(Component);
  Component.small = withTag('small')(Component);

  return Component;
};