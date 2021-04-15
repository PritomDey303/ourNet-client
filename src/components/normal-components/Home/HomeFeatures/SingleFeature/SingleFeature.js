import AOS from "aos";
import React from "react";
import { Card } from "react-bootstrap";
AOS.init();
export default function SingleFeature(props) {
  const { title, description, img } = props.feature;
  return (
    <Card
      className=" mx-4 bg-brand"
      data-aos="flip-up"
      data-aos-duration="2000"
    >
      <Card.Img variant="top" src={img} style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title className="text-center" style={{ color: "brown" }}>
          {title}
        </Card.Title>
        <Card.Text className="text-center text-dark">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
