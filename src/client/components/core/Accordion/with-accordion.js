import React from 'react';
import useAccordion from './use-accordion';

export default Component => (props) => {
  const accordion = useAccordion(false);

  return <Component accordion={accordion} {...props} />;
};