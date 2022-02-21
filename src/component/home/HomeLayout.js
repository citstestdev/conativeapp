import React from 'react';

import Home from './Home';
import DigitalLegacy from './DigitalLegacy';
import ProjectSection from './ProjectSection';
import Expertise from './Expertise';
import OurProjects from './OurProjects';
import ProcessSection from './ProcessSection';
import ClientDetailsSection from './ClientDetailsSection';
// import ClientDetailsSection from './component/home/ClientDetailsSection';


function HomeLayout() {

  return (
    <div className="wrapper">
      <Home />
      <DigitalLegacy />
      <ProjectSection />
      <Expertise />
      <ProcessSection />
      <OurProjects />
      <ClientDetailsSection />
    </div>
  );
}

export default HomeLayout;
