import AOS from "aos";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../../../fakeData/contact";
AOS.init();
export default function Contact() {
  const { phone, fax, street, city, email } = contact;
  return (
    <div className="bg-brand">
      <Container>
        <Row className="mb-3 py-5" data-aos="fade-up" data-aos-duration="1500">
          <Col className="text-center text-dark px-5">
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              quasi repellendus in fugit, fugiat, nam saepe neque nisi nemo,
              quidem eum architecto fuga porro illum. Ipsa similique delectus
              alias quidem?
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} data-aos="fade-right" data-aos-duration="1500">
            <iframe
              title="google-map"
              width="520"
              height="500"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=1000%20Fourth%20Ave.%20Seattle%20Chittagong+(Wood%20Mart)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </Col>

          <Col md={6} data-aos="fade-left" data-aos-duration="1500">
            <h3 className=" display-3 text-dark">Unique Wood Products</h3>

            <p className="t pb-4 align-left  display-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sodales Dellentesque felis, in dignissim diam eleifend.
            </p>

            <p className="mbr-text">
              {email}
              <br />
              0435-35 32 78
              <br />
              <br />
              <strong>Address:</strong>
              <br />
              {street}
              <br />
              {city}
              <br />
              <br />
              <strong>Contacts:</strong>
              <br />
              Phone: {phone}
              <br />
              Fax: {fax}
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
