import React from "react";
import slider1 from "../image/Slider-img-1.jpg";
import slider2 from "../image/Slider-img-2.jpg";
import slider3 from "../image/Slider-img-3.jpg";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
const HomeSlider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 image" src={slider1} alt="First slide" />
        <Carousel.Caption className="slider-containt main-page">
        <p>consequuntur ratione.</p>
          <h1>
            Reapir Your Laptop <br />
            Iphone & Computer.
          </h1>
          <br />
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 image" src={slider2} alt="Second slide" />
        <Carousel.Caption className="slider-containt main-page">
          <h1>
            Reapir Your Laptop <br />
            Iphone & Computer.
          </h1>
          <br />
          <p>consequuntur ratione exercitationem praesentium.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 image" src={slider3} alt="Third slide" />
        <Carousel.Caption className="slider-containt main-page">
          <h1>
            Reapir Your Laptop <br />
            Iphone & Computer.
          </h1>
          <br />
          <p>consequuntur ratione exercitationem praesentium.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeSlider;
