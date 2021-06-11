import React from "react";
import './NewProduct.css'
import { Button } from "react-bootstrap";

const NewProduct = () => {
  return (
    <div className="new-product-Item">
      <div className="text-center pt-5 pb-5">
        <h2 className="pb-3">It all arrived this week</h2>
        <p className="pb-3">
          Furniture exe heirloom ethical man bun sustainable. Pickled normcore
          selvage, bespoke four dollar toast neutra charteuse vinyl.
        </p>
        <Button>VIEW ALL NEW PRODUCTS</Button>
      </div>
    </div>
  );
};

export default NewProduct;
