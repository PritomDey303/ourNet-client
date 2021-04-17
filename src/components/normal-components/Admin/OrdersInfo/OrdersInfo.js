import React, { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { UserContext } from "../../../../App";
import SingleOrderInfo from "./SingleOrderInfo/SingleOrderInfo";

export default function OrdersInfo() {
  const [LoggedInUser, , , , , , , , URL] = useContext(UserContext);
  const [OrderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    fetch(`${URL}/orders?email=${LoggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderInfo(data);
      });
  }, [URL, setOrderInfo, LoggedInUser.email]);

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
          <tbody>
            {OrderInfo.map((order) => (
              <SingleOrderInfo key={order._id} order={order}></SingleOrderInfo>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
