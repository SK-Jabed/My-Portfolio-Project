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
        Homepage
        <div>

        <HeroSection></HeroSection>
        </div>
        <div>

        <AboutMe></AboutMe>
        <MyJourney></MyJourney>
        <Skills></Skills>
        <ProjectsSection></ProjectsSection>
        <ContactSection></ContactSection>
        </div>
      </div>
    );
};

export default Home;