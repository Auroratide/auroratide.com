import React from 'react';
import Main from 'Client/components/layout/Main';
import Footer from 'Client/components/layout/Footer';
import MainBanner from './MainBanner';
import AboutSiteSection from './AboutSiteSection';

const HomePage = () =>
  <div>
    <Main>
      <MainBanner />
      <AboutSiteSection />
    </Main>
    <Footer />
  </div>;

export default HomePage;