import React from "react";
import "./CountCard.css";
import Chear1 from "../../image/product/chear/Chear-1.jpg";

const CountCard = () => {
  return (
    <div id="countCard">
      <div className="row">
        <div className="col-sm-3 col-md-3">
          <div className="count-cart-img">
            <img src={Chear1} alt="" />
          </div>
        </div>

        <div className="col-sm-9 col-md-9">
          <div className="d-flex justify-content-between">
            <div className="count-cart-details">
              <p className="product-name">Elephant-Wood</p>
              <small className="plus-icon">-</small>
              <small className="count-number">1</small>
              <small className="minus-icon">+</small>
            </div>

            <div className="">
              <small className="count-amount">$450</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
