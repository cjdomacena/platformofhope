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
        p="We provide financial assistance for needy and low-income families facing eviction."
        imgclass="services-img" />
        <Column src={hotelroom}
        title= "Hotel Voucher/Shelter Referral"
        p="We offer hotel assistance for homeless families in addition to shelter referrals."
        imgclass="services-img" />
        <Column
        src={computerlab}
        title= "Re-Entry Services"
        p="We facilitate basic computer applications and job readiness in area jails then connect released offenders with community partners for re-employment/second-chance."
        imgclass="services-img" />
        <Column
        src={jobWorkshops}
        title= "Job Workshops"
        p="We provide resume prep, application submission, job portal registration and free notary services to homeless clients."
        imgclass="services-img" />
        <Column src={missionWork}
        title= "Mission Work"
        p="Platform of Hope serves and volunteers throughout the world to transform lives of families."
        imgclass="services-img" />
      </div>

    </div>
  );
}

export default Services;
