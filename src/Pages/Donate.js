import React from 'react';
import './../App.css';
import cashapp from './../images/cashapp.png';
import paypal from './../images/paypal.png';
import givelify from './../images/givelify.png';
import venmo from './../images/venmo.png';
import makeChange from './../images/makechange.jpg';

/**
 * This is the Donate component that holds all information for the Donate page.
 */
function Donate() {
  return (
    <div className="donate">
      <div className="donate-header">
        <h2>Support Comes in Different Forms</h2>
        <p>We are currently accepting monetary donations of any amount.
          Your contribution will help us transform the lives of many people.
        </p>
        <hr/>
      </div>
      <div className="donations-container">
        <div className="monetary-donate">
          <h3>Monetary Donation</h3>
          <p>Platform of Hope greatly appreciates support of any kind.
            The quickest, most efficient way to give is through monetary donations.
            You may choose from PayPal, GoFundMe, Givelify, Venmo, Zelle, Cash App,
            or through traditional check or money order by mail. We accept
            contributions from anyone in Atlanta, Georgia or around the world.</p>
          <div className="donate-links">
            <img src={venmo} alt=""/>
            <p>@platformofhope</p>
            <img src={cashapp} alt=""/>
            <p>$platformofhope</p>
            <img src={givelify} alt=""/>
            <p>Givelify</p>
            <img src={paypal} alt=""/>
            <p>PayPal</p>
          </div>
        </div>
        <div>
          <h3>In-Kind Donations</h3>
          <p>Platform of Hope greatly appreciates easy-open non-perishables,
            coats, blankets, toiletries, backpacks, and any other item easy for
            homeless families to transport.</p>
          <h3>Be A Volunteer</h3>
          <p>Platform of Hope is founded on volunteer service, and it is volunteerism
            that continues to be a life-giving force that will allow us to provide
            top-quality assistance! Please call or email us, so we can discuss
            on how you can volunteer.</p>
        </div>
      </div>
      <div className="affiliate-container">
        <div>
          <h2>Be An Affiliate</h2>
          <hr/>
          <div>
            <h3>Business Partnerships</h3>
            <p>Platform of Hope offers flexible opportunities for businesses to benefit throuoght giving</p>
            <button className="donate-btn">Contact Us</button>
          </div>
          <div>
            <h3>Civic/Group Partnerships</h3>
            <p>Platform of Hope offers community awareness and strong networking</p>
            <button className="donate-btn">Contact Us</button>
          </div>
        </div>
        <img src={makeChange} alt=""/>
      </div>
      <div className="appr-of-funding">
        <div className="donate-header">
          <h2>Appropriation of Funding</h2>
          <p>As a donor, you may elect how your donations are appropriated. Platform of Hope will gladly
            oblige and honor distribution requests of funding.</p>
          <hr/>
        </div>
        <div className="funding-container">
          <div>
            <h3>30%</h3>
            <h4>Extended Stay Support/Shelter Transition Stabilization Program</h4>
            <p>This fund supports homeless single parents within shelter and extended stay motels.
            Funds are used for used clothing, food, medicine, moving costs and/or deposits for
            utilities for stable housing move, transportation via ride share for interviews, jobs, doctor
            appointments and grocery stores.</p>
          </div>
          <div>
            <h3>20%</h3>
            <h4>Re-entry Released Offender Initiative</h4>
            <p>This fund supports released female offenders re-enter society by providing
            transportation for court appointments, restitution, probation fees, interviews, uniforms,
            doctor appointments, costs for identification (IDs, birth certificates, etc) food, used
            clothing, toiletries, etc..</p>
          </div>
          <div>
            <h3>25%</h3>
            <h4>COVID-19 Response Unit</h4>
            <p>This fund supports weekly distribution and DELIVERY of food, medicine and
            supplies/necessities to immobilized senior citizens within four low-income apartment
            housing communities.</p>
          </div>
        </div>
        <div className="funding-container">
          <div>
            <h3>10%</h3>
            <h4>Christmas Holiday Program</h4>
            <p>This fund serves under-resourced families residing in extended stay motels and/or
              shelters with yearly distribution of toys, tablets, bicycles; ages 0-14.</p>
          </div>
          <div>
            <h3>10%</h3>
            <h4>Back to School Resources</h4>
            <p>This fund serves as a yearly Back to School bash across two states; Georgia and
            Mississippi. Students receive backpacks and school supplies. During 2020, POH provided
            25 laptops to under-served families for virtual learning.</p>
          </div>
          <div>
            <h3>5%</h3>
            <h4>General Daily Operations</h4>
            <p>This fund supports daily operations to include administrative support, manual labor,
            organization supplies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
