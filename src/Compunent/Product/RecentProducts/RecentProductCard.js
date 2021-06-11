import React from "react";
import './RecentProducts.css';
import { Card, Col } from "react-bootstrap";
import chare1 from "../../image/product/chear/Chear-5.jpg";
const RecentProductCard = () => {
  return (
    <Col xs={6} sm={6} md={4} lg={3}>
      <div className="mb-4">
        <Card className="text-white card-border">
          <Card.Img src={chare1} alt="Card image" className="card-size" />
          <Card.ImgOverlay>
            <Card.Text id="recentProduct-card-text">8 product</Card.Text>
            <Card.Title>Living Room</Card.Title>
            <Card.Footer>
                shoman                
            </Card.Footer>
          </Card.ImgOverlay>
        </Card>
      </div>
    </Col>
  );
};

export default RecentProductCard;
