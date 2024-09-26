import React from 'react';
import './../App.css';
import emailjs from 'emailjs-com';
import Select from 'react-select';
import servicesImg from './../images/get-help-services-edited.png';
import guideImg from './../images/atlantasguide.png';
import resourceGuideImg from './../images/resource-guide.png';
import resourceGuidePdf from './../files/2018-grady-healthy-living-resource-guide.pdf';
import guidePdf from './../files/Critical-Needs-Guide-2023.pdf';
import { Helmet } from 'react-helmet';
import {Link} from "react-router-dom";

/**
 * This is the Get Help component that holds all information for the Get Help page.
 */
function GetHelp() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_8fderar', 'template_dhc5ntj', e.target, 'user_OKR16ehhZhBLdFc7CF3bH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  const numbersOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
  ];

  const yesNoOptions = [
    { value: 'yes', label: 'yes' },
    { value: 'no', label: 'no' },
  ];

  const selectStyles = {
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: 'lightgray',
      letterSpacing: '2px',
    }),
    control: (provided, state) => ({
      ...provided,
      paddingTop: 13,
      paddingBottom: 13,
      paddingLeft: 5,
      marginTop: '4%',
      border: 'solid 1px gray',
    })
  }

  return (
    <div className="GetHelp">
      <Helmet>
      <title>Get Help - Platform of Hope in Atlanta, Georgia</title>
      </Helmet>
      <div className="get-help-top">
        <h1>We are here to help</h1>
        <h3>Reach out to us or submit the form below to recieve help</h3>
      </div>
      <div className="get-help-container">
        <div className="get-help-card">
          <img src={guideImg} alt="Resource Guide"/>
          <h2>Critical Needs Guide</h2>
          <p>Greater Atlanta's Critical Needs Guide</p>
          <a href={guidePdf} target="_blank" rel="noopener noreferrer" download className="get-help-services-btn">
            <button>DOWNLOAD</button>
          </a>
        </div>
        <div className="get-help-card">
          <img src={resourceGuideImg} alt="Resource Guide"/>
          <h2>Resource Guide</h2>
          <p>Access the United Way 211 searchable database</p>
          <p>of services in Atlanta, Georgia here</p>
          <a href={"http://211online.unitedwayatlanta.org/"} target="_blank" rel="noopener noreferrer" className="get-help-services-btn">
            <button>TO DATABASE</button>
          </a>
        </div>
      </div>
      <div className="outreach-container">
        <h2>Outreach Request Form</h2>
        <p>Please fill out this outreach form and we will be in touch with you shortly.</p>
        <form className="outreach-form" onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" required/>
          <input type="email" placeholder="Email Address" name="email" required/>
          <input type="text" placeholder="Phone Number" name="phone" required/>
          <input type="text" placeholder="Address" name="address"/>
          <input type="number" placeholder="Number of people in household" name="housesize" min="1" required/>
          <input type="number" placeholder="Household income" name="income" min="0" required/>
          <p>Which benefits do you recieve?</p>
          <div className="checkbox">
            <input type="checkbox" name="foodstamps"/>
            <label for="foodstamps">SNAP/Food Stamps</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" name="medicaid"/>
            <label for="medicaid">Medicaid</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" name="tanf"/>
            <label for="tanf">TANF</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" name="disability"/>
            <label for="disability">Disability</label>
          </div>
          <textarea placeholder="Grade(s) and School(s) of child(ren)" name="childschool"/>
          <input type="text" placeholder="How were you referred?" name="referal"/>
          <Select
            name={'veteran'}
            options={yesNoOptions}
            placeholder={'Are you a veteran?'}
            styles={selectStyles}
          />
          <textarea placeholder="Description of your and/or your family's needs" name="helptype" required/>
          <input className="outreach-submit" type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
}

export default GetHelp;
