import React, { useState, useEffect } from 'react';
import './../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import Popup from './../Components/Popup';
import { Events } from './../Components/Events';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from './../images/gallery/image-1.jpg';
import img2 from './../images/gallery/image-2.jpg';
import img3 from './../images/gallery/poh-image3.jpg';
import img4 from './../images/gallery/poh-image4.jpg';
import img5 from './../images/gallery/poh-image5.jpg';
import img6 from './../images/gallery/poh-image6.jpg';
import img7 from './../images/gallery/poh-image7.jpg';
import img8 from './../images/gallery/poh-image8.jpg';
import img9 from './../images/gallery/poh-image9.jpg';
import img10 from './../images/gallery/poh-image10.jpg';
import img11 from './../images/gallery/poh-image11.jpg';
import img12 from './../images/gallery/poh-image12.jpg';
import img13 from './../images/gallery/poh-image13.jpg';
import img14 from './../images/gallery/poh-image14.jpg';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import testVideo from './../images/test.mp4';
import video2020 from './../images/2020video.mp4';
import coatVideo from './../images/coatdrive.mp4';
import {Helmet} from 'react-helmet'
const localizer = momentLocalizer(moment);

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

/**
 * This is the Home component that holds all information for the Home page.
 */
function NewsAndEvents() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    setTitle(event.title);
    setDescription(event.start.toDateString());
    setLocation(event.location);
  };

  // Swiper instance
  const [swiper, updateSwiper] = useState(null);
  // Swiper thumbsinstance
  const [thumbsSwiper, updateThumbsSwiper] = useState(null);

  const imageSrcs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]
  const slides = [];
  const thumbs = [];
  for (let i = 0; i < imageSrcs.length; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img className="slider-img" src={imageSrcs[i]} alt=""/>
      </SwiperSlide>
    );
    thumbs.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img className="slider-img" src={imageSrcs[i]} alt=""/>
      </SwiperSlide>
    );
  }

  // Bind swiper and thumbs swiper
  useEffect(() => {
    if (swiper && thumbsSwiper) {
      swiper.controller.control = thumbsSwiper;
      thumbsSwiper.controller.control = swiper;
    }
  }, [swiper, thumbsSwiper]);

  return (
    <div>
      <Helmet>
      <title>Donate - Platform of Hope in Atlanta, Georgia</title>
      </Helmet>
      <div className="news-events-image">
        <h1>News & Events</h1>
        <h3>Stay updated with our latest events.</h3>
      </div>
      <div className="calendar-container">
        <h2>Calendar</h2>
        <Calendar
          selectable={true}
          onSelectEvent={(event) => handleShow(event)}
          localizer={localizer}
          events={Events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          eventPropGetter={
            (event, start, end, isSelected) => {
              let newStyle = {
                backgroundColor: "#faa919",
                color: 'white',
                borderRadius: "0px",
                border: "none"
              };
              return {
                className: "",
                style: newStyle
              };
            }
          }
        />
        <Popup show={show} handleClose={handleClose} title={title} description={description} location={location} />
      </div>
      <div className="media-container">
        <h2>Media</h2>
        <p>Explore videos and images of our past events.</p>
        <hr/>
        <div>
          <h2>Videos</h2>
          <video className="large-video" controls><source src={testVideo}></source></video>
          <div className="small-videos">
            <video controls><source src={coatVideo}></source></video>
            <iframe classname="slider-img" width="560" height="315" src="https://www.youtube.com/embed/wkZeEiLNLLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <video controls><source src={video2020}></source></video>
          </div>
        </div>
        <div>
          <h2>Image Gallery</h2>
          <Swiper
            id="gallery"
            tag="section"
            wrapperTag="ul"
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination
            onSwiper={updateSwiper} // Get swiper instance callback
          >
            {slides}
          </Swiper>
          <Swiper
            id="thumbs"
            onSwiper={updateThumbsSwiper} // Get swiper instance callback
            slidesPerView={5}
            slideToClickedSlide
            centeredSlides
          >
            {thumbs}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default NewsAndEvents;
