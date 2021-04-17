import React from "react";
import { Container } from "react-bootstrap";

export default function WelcomeAdmin() {
  return (
    <div>
      <Container>
        <h1
          style={{ color: "brown" }}
          className="mx-auto mt-5  my-5 py-5"
          data-aos="fade-up-left"
          data-aos-duration="1500"
        >
          Welcome to Admin Panel.
        </h1>
      </Container>
    </div>
  );
}
