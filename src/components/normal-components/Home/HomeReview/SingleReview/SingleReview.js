import { Rating } from "@material-ui/lab";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import UserThumb from "../../../../../images/usericon.png";
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
            className="rounded-circle p-1"
            style={{ width: "60px", height: "60px" }}
          >
            {img ? (
              <img src={img} alt="" className="img-fluid rounded-circle " />
            ) : (
              <img
                src={UserThumb}
                alt=""
                className="img-fluid rounded-circle "
              />
            )}
          </div>
        </Col>
        <Col>
          <h3>{name}</h3>
          <p>
            Rating: <br />
            <Rating name="read-only" value={rating} max={5} readOnly />
          </p>
          <p>{review.substr(0, 200)}......</p>
        </Col>
      </Row>
    </Card>
  );
}
