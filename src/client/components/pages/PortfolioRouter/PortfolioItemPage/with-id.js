import React from 'react';
import { withRouter } from 'react-router-dom';

export default Component => withRouter(({ match, ...props }) => <Component id={match.params.id} {...props} />);