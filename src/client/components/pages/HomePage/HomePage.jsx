import React from 'react';
import Main from 'Client/components/layout/Main';
import Footer from 'Client/components/layout/Footer';
import MainBanner from './MainBanner';

const HomePage = () =>
  <div>
    <Main>
      <MainBanner />
    </Main>
    <Footer />
  </div>;

export default HomePage;