import React from "react";
import { Container, Table } from "react-bootstrap";

export default function ManageReview() {
  return (
    <div>
      <Container className="pt-5">
        <h1
          style={{ color: "brown" }}
          className="mt-3 mb-4 ml-1"
          data-aos="flip-up"
          data-aos-duration="1500"
        >
          Manage Review Here:
        </h1>
        <Table striped data-aos="fade-up" data-aos-duration="1500">
          <thead className="text-light" style={{ backgroundColor: "brown" }}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Review</th>
              <th>Rating</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </Container>
    </div>
  );
}
