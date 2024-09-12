import React from 'react';
import './../App.css';
import Column from '../Components/Column';
import computerlab from './../images/computerlab.jpg';
import foodpantry from './../images/foodpantry.jpg';
import rentassistance from './../images/rentassistance.png';
import hotelroom from './../images/hotelroom.jpg';
import mainImage from './../images/services-main.png';
import jobWorkshops from './../images/job-workshops.png';
import missionWork from './../images/mission-work.png';
import sudsofhope from './../images/sudsofhope.jpg';
import resourceguide from './../images/resourceguide2023.png';
import { Helmet } from 'react-helmet';

/**
 * This is the Home component that holds all information for the Home page.
 */
function Services() {
  return (
    <div className="donate">
      <Helmet>
      <title>Services - Platform of Hope in Atlanta, Georgia</title>
      </Helmet>
      <div className="donate-header">
        <h2>Services</h2>
        <p>
          Platform of Hope provides a host of services to enhance and transform
          lives of homeless families and individuals in Atlanta, Georgia and surrounding counties.
        </p>
        <hr/>
      </div>
      <img className="services-main" src={mainImage} alt="" />
      <div className="donate-header">
        <h3>What We Do</h3>
        <hr/>
      </div>
      <div className="column-container">
        <Column
        src={foodpantry}
        title= "Food Pantry/Clothes Closet"
        p="Distributes non-perishables, personal essentials, coats and blankets to underserved families."
        imgclass="services-img" />
        <Column
        src={rentassistance}
        title= "Rent/Utility Assistance"
        p="We provide financial assistance to families facing eviction."
        imgclass="services-img" />
        <Column src={hotelroom}
        title= "Hotel Voucher/Shelter Referral"
        p="We offer hotel assistance and shelter referrals upon available funding."
        imgclass="services-img" />
        <Column
        src={computerlab}
        title= "Reentry Services"
        p="We facilitate basic computer applications and job readiness in area jails then connect individuals with community partners for re-employment/second-chance employment."
        imgclass="services-img" />
        <Column
        src={jobWorkshops}
        title= "Job Workshops"
        p="We provide resume prep, application submission, job portal registration, free notary services to homeless clients, and free access to laptops."
        imgclass="services-img" />
        <Column src={missionWork}
        title= "Mission Work"
        p="Platform of Hope serves and volunteers throughout the world to transform lives of families."
        imgclass="services-img" />
        <Column src={sudsofhope}
        title= "Suds of Hope"
        p="Platform of Hope-Suds of Hope offers safe, accessible showers at no cost to individuals experiencing homelessness."
        imgclass="services-img" />
        <Column src={resourceguide}
        title= "Resource Guide"
        p="Greater Atlanta's Critical Needs Guide. "
        imgclass="services-img" 
        hasLink={true} />
      </div>

    </div>
  );
}

export default Services;
