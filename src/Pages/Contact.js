import React from 'react';
import emailjs from 'emailjs-com';
import './../App.css';
import { Helmet } from 'react-helmet';

/**
 * This is the Contact component that holds all information for the Contact page.
 */
function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_8fderar', 'template_6hjo9b6', e.target, 'user_OKR16ehhZhBLdFc7CF3bH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className="Contact">
      <Helmet>
      <title>Contact - Platform of Hope in Atlanta, Georgia</title>
      </Helmet>

      <div className="contact-top">
        <h1>Contact Us</h1>
        <h3>If you would like to make a difference let us know!</h3>
      </div>
      <div className="contact-container">
        <div className="get-in-touch">
          <h1>Get In Touch</h1>
          <p>Please fill out this brief form and we will be in touch with you shortly.</p>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" required/>
            <input type="text" placeholder="Phone Number" name="phone" required/>
            <input type="email" placeholder="Email Address" name="email" required/>
            <textarea placeholder="Message" name="message" required/>
            <input className="contact-submit" type="submit" value="SUBMIT" />
          </form>
        </div>
        <div className="contact-info">
          <h2>Connect with us</h2>
          <p>For support or any questions:</p>
          <p>Email us at <span>info@platformofhope.org</span></p>
          <p>Or call <span>(770) 767-0200</span></p>
          <h2>Mailing Address</h2>
          <p>P.O. Box 48198</p>
          <p>Atlanta, GA 30362</p>
          <h2>Areas Served</h2>
          <p>Atlanta, Georgia, Surrounding Counties, and Mississipi Delta.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
