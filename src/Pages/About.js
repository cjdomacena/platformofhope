import React from 'react';
import './../App.css';
import AboutPage from '../Components/About'
import {Helmet} from 'react-helmet'
/**
 * This is the About component that holds all information for the About page.
 */
function About() {
  return (
    <div className="About">
      <Helmet>
      <title>About Us - Platform of Hope in Atlanta, Georgia</title>
      </Helmet>
        <AboutPage/>

    </div>
  );
}

export default About;
