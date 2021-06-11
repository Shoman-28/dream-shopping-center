import React from "react";
import CountCard from "../CountCard/CountCard";
import "./AddCard.css";
const AddCard = () => {
  return (
    <div id="AddCard">
      <div className="container">
        <div>
          <CountCard />
          <CountCard />
          <CountCard />
          <CountCard />
          
        </div>
        <div className="line mb-3"></div>
        <div className="d-flex justify-content-between">
          <p className="subtotal">Subtotal</p>
          <p className="sub-Amount">$3095</p>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
