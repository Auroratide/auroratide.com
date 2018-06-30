import React from 'react';
import Main from 'Client/components/layout/Main';
import Footer from 'Client/components/layout/Footer';
import MainBanner from './MainBanner';
import AboutSiteSection from './AboutSiteSection';
import AboutMeSection from './AboutMeSection';

const HomePage = () =>
  <div>
    <Main>
      <MainBanner />
      <AboutSiteSection />
      <AboutMeSection />
    </Main>
    <Footer />
  </div>;

export default HomePage;