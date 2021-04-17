import AOS from "aos";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleProduct.css";
AOS.init();
export default function SingleProduct(props) {
  const { _id, product_name, img, price } = props.product;
  console.log(_id, product_name, price);
  return (
    <Col className="mb-4" data-aos="flip-down" data-aos-duration="2000">
      <Link to={`/checkout/${_id}`}>
        <Card className="w-100 product-card shadow">
          <div className="card-overlay text-light">
            <h6>Click to Order</h6>
          </div>
          <Card.Img variant="top" src={img} style={{ height: "200px" }} />
          <Card.Body>
            <Card.Title className="text-center" style={{ color: "brown" }}>
              {product_name}
            </Card.Title>
            <Card.Text className="text-center text-dark">
              <h4 className="text-dark"> Price:${price}</h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
