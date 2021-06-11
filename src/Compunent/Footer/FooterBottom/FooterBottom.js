import React from "react";
import { Col, Row } from "react-bootstrap";
import "./FooterBottom.css";
const FooterBottom = () => {
  return (
    <div className="pb-5 ">
      <div className="footer-bottom">
        <div className="footerBottom-size">
          <small>shoman</small>
          <small>shoman</small>
          <small>shoman</small>
          <small>shoman</small>
        </div>

        <div className="footerBottom-size">
          <div className="footer-bottom-card">
            <div>
              <small> Copyright &copy; 2021 Shoman, Kishoreganj. </small>
            </div>
            <div>
              <small>shoman</small>
              <small>shoman</small>
              <small>shoman</small>
              <small>shoman</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
