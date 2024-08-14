import React from 'react';
import Feature from "./Feature";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import PriceSection from "./PriceSection";

const HomePage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-20">
        <HeroSection />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-20">
        <AboutSection />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-20">
        <Feature />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-20">
        <PriceSection />
      </div>
    </>
  );
};

export default HomePage;
