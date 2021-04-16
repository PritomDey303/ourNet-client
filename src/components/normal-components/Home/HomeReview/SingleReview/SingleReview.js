import { Rating } from "@material-ui/lab";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function SingleReview(props) {
  const { name, review, img, rating } = props.review;
  return (
    <Card
      className="bg-brand mx-3 p-3"
      data-aos="flip-left"
      data-aos-duration="2000"
    >
      <Row>
        <Col xs={3}>
          <div
            className="rounded-circle"
            style={{ width: "50px", height: "50px" }}
          >
            <img src={img} alt="" className="img-fluid rounded-circle " />
          </div>
        </Col>
        <Col>
          <h3>{name}</h3>
          <p>
            Rating: <br />{" "}
            <Rating name="read-only" value={rating} max={5} readOnly />
          </p>
          <p>{review}</p>
        </Col>
      </Row>
    </Card>
  );
}
