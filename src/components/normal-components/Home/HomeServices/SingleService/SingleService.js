import AOS from "aos";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleService.css";
AOS.init();
export default function SingleService(props) {
  const { _id, service_name, description, img, price } = props.service;
  const desc = description.split("/");
  return (
    <Col
      className="mb-4"
      data-aos="flip-down"
      data-aos-duration="2000"
      style={{ position: "relative" }}
    >
      <Link to={`/checkout/${_id}`} style={{ textDecoration: "none" }}>
        <Card className="w-100 product-card ">
          <div className="card-overlay text-light">
            <h4>Click to Book</h4>
          </div>
          <Card.Img variant="top" src={img} style={{ height: "200px" }} />
          <Card.Body>
            <Card.Title className="text-center" style={{ color: "brown" }}>
              {service_name}
            </Card.Title>
            <Card.Text className="text-center text-dark">
              <p className="text-dark">
                {desc.map((singledesc) => (
                  <li style={{ listStyle: "none" }}>{singledesc}</li>
                ))}
              </p>
              <h5>
                <span className="display-3 text-danger">${price}</span> monthly
              </h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
