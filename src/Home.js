import React from 'react';
import './App.css';
import HomeColumn from './Components/HomeColumn/HomeColumn';
import handsheart from './images/home-icons/handsheart.png'
import holdhands from './images/home-icons/holdhands.png';
import prayinghands from './images/home-icons/prayingicon.png';
import flyer from './images/world_homeless_day.png';
import { Row, Col } from 'react-bootstrap'
import logo from './images/pohlogo.png';
import { Events } from './Components/Events'
import UpcomingEvents from './Components/UpcomingEvents';
import Phases from './Components/Phases'
import {Link} from "react-router-dom";
import homeVideo from './images/test.mp4';
import {FaArrowRight} from 'react-icons/fa'
import { Helmet } from 'react-helmet';


function Home() {
 
  const homeColumn = [
    {
      imageLink: handsheart,
      title: "Volunteer",
      paragraph: "Volunteering changes lives. You may volunteer by working events, making calls to potential donors, sorting donated goods and other tasks.",
      alt: "hands with heart",
      link: "/contact"

    },
    {
      imageLink: holdhands,
      title: "Get Help",
      paragraph: "Platform of Hope distributes material essentials, non-perishables while providing financial assistance. Applications are accepted when funding is available.",
      alt: "holding hands",
      link: "/gethelp"
    },
    {
      imageLink: prayinghands,
      title: "Donate",
      paragraph: "Platform of Hope greatly appreciates support of any kind. The quickest, most efficient way to give is through monetary donations.",
      alt: "praying hands",
      link: "/donate"
    }

  ];

  

  return (
    <div className="home">
      <Helmet>
      <title>Platform of Hope</title>
      </Helmet>
      <div className="home-top">
        <div>
          <h1>Helping One Family At A Time.</h1>
          <p>
          Platform of Hope is an initiative designed to feed, house, clothe, and employ homeless families while empowering and transforming lives of the economically underserved. We successfully provide support and restore lives of homeless families in Atlanta, Georgia and surrounding counties. Platform of Hope facilitates in local correctional facilities then partners released offenders with employers for reemployment.
          </p>
          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>
        <img src={logo} alt="logo" />
      </div>

      <div className="home-container">
      <svg className="home-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffffff" fill-opacity="1" d="M0,160L26.7,144C53.3,128,107,96,160,112C213.3,128,267,192,320,197.3C373.3,203,427,149,480,149.3C533.3,149,587,203,640,192C693.3,181,747,107,800,85.3C853.3,64,907,96,960,144C1013.3,192,1067,256,1120,266.7C1173.3,277,1227,235,1280,224C1333.3,213,1387,235,1413,245.3L1440,256L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
</svg>
      </div>
      <div className="home-section">
        <div className="home-col-title">
          <h1>Together we can make a Difference</h1>
          <p>No matter how old you are, where you live, or what you can give, you can help those in need.</p>
          <div />
        </div>
        <Row>
          {
            homeColumn.map(function (items) {
              return <HomeColumn
                title={items.title}
                paragraph={items.paragraph}
                image={items.imageLink}
                alt={items.alt}
                link={items.link}

              />
            })
          }
        </Row>
      </div>

      <div className="featuredEventsContainer">


        <div className="featuredEvents">

          <Row>
            <Col xl={8} lg={8} md={12}>
              <div className="upcomingEvents d-flex align-items-center justify-content-center">
                <Row>

                  <Col md={12} lg={6} sm={12} offset={3} className="d-flex align-items-center justify-content-center pb-md-4 flex-column">

                    <div className="upcomingEventsImage">
                      <h3 className="align-self-lg-start pb-lg-2 pl-0">Upcoming Events</h3>
                      <img src={flyer} alt="World Homeless Day" />
                    </div>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-center flex-column" md={12} lg={6} sm={12}>

                    <div className="upcomingEventsList d-flex align-items-md-center justify-content-lg-center">

                    {
                  Events.filter(event => event.start >= Date.now() ).sort((a, b) => {
                    return a.start - b.start;
                  }).slice(0,4).map(event =>
                    
                    <Link to="/newsandevents"> <UpcomingEvents title={event.title} date={event.start.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})} ></UpcomingEvents></Link>
                    )
                 }


                    </div>
                  </Col>
                </Row>
              </div>

            </Col>


            <Col xl={4} lg={4} className="pastEventsCol align-items-sm-center justify-sm-content-center d-flex flex-column align-items-xl-start">
             <h3 className="text-md-center ml-3">Past Events</h3>
              <div className="pastEvents d-flex flex-column justify-content-center align-items-sm-center align-items-md-center align-items-lg-start align-items-xl-start">

                {
                  Events.filter(event => event.start < Date.now() ).sort((a, b) => {
                    return b.start - a.start;
                  }).slice(0,4).map(event =>
                    
                    <Link to="/newsandevents"> <UpcomingEvents title={event.title} date={event.start.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})} ></UpcomingEvents></Link>
                    )
                 }

              </div>

            </Col>
          </Row>
        </div>

      </div>


      {/* Phases */}
      <Phases/>


      <div className="home-video container-fluid">
                 <video
                 autoPlay
                 loop
                 muted
                 style = {{
                   width: "100%",
                   padding: "0",
                   margin: "0",
                  }}
                 >
                   <source src={homeVideo} type="video/mp4"/>
                 </video>
                 <div className="home-overlay">
                   <div className="home-text">
                   <h1>Learn more about us</h1>
                   <p>Check out our full image and video gallery

                   <Link to="/newsandevents"><span className="pl-1"><FaArrowRight></FaArrowRight></span></Link>
                   </p>


                   </div>

                 </div>
      </div>

    </div>


  );
}

export default Home;
