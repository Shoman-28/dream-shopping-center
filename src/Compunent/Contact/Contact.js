import React from "react";
import "./Contact.css";
import { Col, Row } from "react-bootstrap";
import MainContactImage from "../image/product/chear/Visit-us.jpg";
import VisitUs from "../image/product/chear/Follow Store.jpg";

const Contact = () => {
  return (
    <div id="contact-homePage" className="pb-5 pt-5">
      <div className="contact-image">
        <div className="contact-text">
          <h2>Visit Us</h2>
          <p>Head Office</p>
          <p>10 Kishoreganj Kishoreganj-Sador</p>
          <p>Dhaka-1202</p>
          <small>@Shoman</small>
        </div>
      </div>
      <div className="contact-image-Instagram">
        <div className="contact-text">
          <h2>Follow Our Store<br/> On Instagram</h2>
         
          <small>@Shoman</small>
        </div>
      </div>
    </div>
  );
};

export default Contact;
