import React from "react";
import "./ProductItems.css";
import ProductItemCard from "../Card/ProductItemCard/ProductItemCard";
import { Col, Row } from "react-bootstrap";

const ProductItems = () => {
  return (
    <div className="product-Item mt-5">
      <Row>
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
      </Row>
    </div>
  );
};

export default ProductItems;
