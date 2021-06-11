import React from "react";
import "./ProductItemCard.css";
import chare1 from "../../image/product/chear/Chear-4.jpg";
import { Card, Col } from "react-bootstrap";

const ProductItemCard = () => {
  return (
    <Col xs={6} sm={6} md={4} lg={3}>
      <div className="mb-4">
        <Card className="bg-dark text-white product-item">
          <Card.Img src={chare1} alt="Card image" className="card-size" />
          <Card.ImgOverlay>
            <Card.Text className="card-text">8 product</Card.Text>
            <Card.Title>Living Room</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    </Col>
  );
};

export default ProductItemCard;
