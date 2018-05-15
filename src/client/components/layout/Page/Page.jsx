import React from 'react';
import PropTypes from 'prop-types';

import Header from 'Client/components/layout/Header';
import Main from 'Client/components/layout/Main';

const Page = ({ children }) =>
  <div>
    <Header />
    <Main>{children}</Main>
  </div>;

Page.propTypes = {
  children: PropTypes.node
};

export default Page;