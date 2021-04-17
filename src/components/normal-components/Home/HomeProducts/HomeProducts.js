import AOS from "aos";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../../../App";
import SingleProduct from "./SingleProduct/SingleProduct";
AOS.init();
export default function HomeProducts() {
  const [, , Product, , , , , ,] = useContext(UserContext);
  console.log(Product);
  return (
    <div className="py-5 bg-brand" data-aos="fade-up" data-aos-duration="1500">
      <Container>
        <Row>
          <Col className="text-center text-dark px-5">
            <h1>Our Products</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              quasi repellendus in fugit, fugiat, nam saepe neque nisi nemo,
              quidem eum architecto fuga porro illum. Ipsa similique delectus
              alias quidem?
            </p>
          </Col>
        </Row>
        <Row className="mt-5" xl={4} lg={3} md={2} xs={1}>
          {Product.map((pd) => (
            <SingleProduct key={pd._id} product={pd}></SingleProduct>
          ))}
        </Row>
      </Container>
    </div>
  );
}
