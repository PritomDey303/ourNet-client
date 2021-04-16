import AOS from "aos";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomeHeader.css";
AOS.init();
export default function HomeHeader() {
  return (
    <div className="home-header">
      <div className="home-header-overlay"></div>
      <Container>
        <Row className="pt-5">
          <Col>
            <div className="ml-auto text-light home-header-text">
              <h1
                className="py-3"
                style={{ fontSize: "60px" }}
                data-aos="fade-down-left"
                data-aos-duration="500"
              >
                Wooden Furniture Store
              </h1>
              <p
                style={{ fontSize: "20px" }}
                data-aos="fade-up-right"
                data-aos-duration="1000"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sodales Dellentesque felis, in dignissim diam eleifend et.
                Aenean sagittis lacus sed augue mollis convallis. Vivamus orci
                ligula, rhoncus a finibus at, molestie bibendum ex. Morbi
                lacinia eros non orci eleifend elementum.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
