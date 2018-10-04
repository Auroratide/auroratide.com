import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Colors from 'Client/config/colors';

import Header from 'Client/components/layout/Header';
import Main from 'Client/components/layout/Main';
import Footer from 'Client/components/layout/Footer';

const Page = ({ theme, children }) =>
  <div className={`theme-${theme}`}>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </div>;

Page.propTypes = {
  theme: PropTypes.color,
  children: PropTypes.node
};

Page.defaultProps = {
  theme: Colors.AURORA_BLUE.name
};

export default Page;