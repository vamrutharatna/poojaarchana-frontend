import React from 'react';
import '../../App.css';
import FeatureCards from '../Feature/FeatureCards';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import Category from '../Category/Category';
import NewCards from '../NewCards/newcards';
import AboutCard from '../About/AboutCard';
import PopularCards from '../MostPopular/Popular';


function Home() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <Category />
      <NewCards />
      <PopularCards />
      <AboutCard />
      <Footer />
    </>
  );
}

export default Home;
