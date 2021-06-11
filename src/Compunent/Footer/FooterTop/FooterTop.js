import { faYoutube, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./FooterTop.css";
const FooterTop = () => {
  return (
    <div className="mb-5 pt-3">
      <div class="row">
        <div className="col-md-12 col-lg-6">
          <div className="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="About-us">
                <h1>About Us</h1>
                <h3>Read Our Blog</h3>
                <h3>Contact Us</h3>
                <h3>Store Locations</h3>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="About-us">
                <h1>FAQs</h1>
                <h3>Order Tracking</h3>
                <h3>Protfolio</h3>
                <h3>Privacy Policy</h3>
                <h3>Shipping and Returns</h3>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="About-us">
                <h1>Social Media</h1>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
        <div class="social-icon">
                <h1>Social Media</h1>
                
              </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
