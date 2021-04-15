import AOS from "aos";
import React from "react";
import { Card, Col } from "react-bootstrap";
import "./SingleProduct.css";
AOS.init();
export default function SingleProduct(props) {
  const { product_name, img, price } = props.product;
  return (
    <Col className="mb-3" data-aos="flip-down" data-aos-duration="2000">
      <Card className="w-100 product-card shadow">
        <div className="card-overlay text-light">
          <h6>Click to Order</h6>
        </div>
        <Card.Img variant="top" src={img} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title className="text-center" style={{ color: "brown" }}>
            {product_name}
          </Card.Title>
          <Card.Text className="text-center text-dark">Price:{price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
