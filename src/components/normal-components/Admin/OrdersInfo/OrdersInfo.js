import React from "react";
import { Container, Table } from "react-bootstrap";

export default function OrdersInfo() {
  return (
    <div>
      <Container className="pt-5">
        <h1
          style={{ color: "brown" }}
          className="mt-3 mb-4 ml-1"
          data-aos="flip-up"
          data-aos-duration="1500"
        >
          Order Information Here:
        </h1>
        <Table striped data-aos="fade-up" data-aos-duration="1500">
          <thead className="text-light" style={{ backgroundColor: "brown" }}>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Mobile No</th>
              <th>Order Date</th>
              <th>Order State</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </Container>
    </div>
  );
}
