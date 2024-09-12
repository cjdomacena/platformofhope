import React from 'react';
import './../App.css';
import { Row, Col, ListGroup } from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import {Link} from "react-router-dom";
import construction from './../images/construction.jpg';

/**
 * This is the Partners component that holds all information for the Partners page.
 */
function Partners() {
  return (
    <div className="donate">
      <Helmet>
        <title>Partners - Platform of Hope in Atlanta, Georgia</title>
      </Helmet>
      <div className="donate-header">
        <h2>Platform of Hope Partners</h2>
        <p>Platform of Hope relies heavily on partnerships to
            transform lives of those experiencing homelessness.
            The communal support ensures food, housing and clothing
            are available to applicants in need.
        </p>
        <hr/>
        <div className="partners-container">
            <img src={construction} alt="under construction"/>
        </div>
      </div>
    </div>
  );
}

export default Partners;
