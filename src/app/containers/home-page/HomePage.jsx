import React, { Component, Fragment } from 'react';

import Header from '../../components/pages/Header';
import Footer from '../../components/pages/Footer';
import HeroPanel from '../../components/pages/HomePage/hero-panel/HeroPanel';
import HomePageHeroImage from '../../../assets/images/home-page-hero-img.jpg';

const content = {
  title: 'Learn how to program software and application in 10 weeks'
};

class HomePage extends Component {
  render() {
    return (
      <main>
        <Header />
        <HeroPanel
          src={HomePageHeroImage}
          title={content.title}
        />
        <Footer />
      </main>
    );
  }
}

export default HomePage;
