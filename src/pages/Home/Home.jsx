import React from 'react';
import AboutMe from './AboutMe';
import HeroSection from './HeroSection';
import MyJourney from './MyJourney';
import Skills from './Skills';

const Home = () => {
    return (
      <div>
        Homepage
        <div>

        <HeroSection></HeroSection>
        </div>
        <div>

        <AboutMe></AboutMe>
        <MyJourney></MyJourney>
        <Skills></Skills>
        </div>
      </div>
    );
};

export default Home;