import React from 'react';
import AboutMe from './AboutMe';
import HeroSection from './HeroSection';
import MyJourney from './MyJourney';
import Skills from './Skills';
import ContactSection from './ContactSection';
import ProjectsSection from './ProjectsSection';

const Home = () => {
    return (
      <div>
        {/* <HeroSection></HeroSection>       */}
        <AboutMe></AboutMe>
        <MyJourney></MyJourney>
        <Skills></Skills>
        <ProjectsSection></ProjectsSection>
        <ContactSection></ContactSection>
      </div>
    );
};

export default Home;