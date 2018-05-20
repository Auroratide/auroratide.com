import React from 'react';
import PropTypes from 'prop-types';

import Header from 'Client/components/layout/Header';
import Main from 'Client/components/layout/Main';
import Footer from 'Client/components/layout/Footer';

const Page = ({ children }) =>
  <div>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </div>;

Page.propTypes = {
  children: PropTypes.node
};

export default Page;