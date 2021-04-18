import React, { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { UserContext } from "../../../../App";
import SingleOrder from "./SingleOrder/SingleOrder";

export default function AllOrders() {
  const [, , , , , , , , URL] = useContext(UserContext);
  const [OrderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    fetch(`${URL}/allorders`)
      .then((res) => res.json())
      .then((data) => {
        setOrderInfo(data);
      });
  }, [URL, setOrderInfo]);

  const handleOrder = (id, state) => {
    fetch(`http://localhost:5000/updateorder/${id}?state=${state}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res.status === 200
        ? alert("Order State Updated Successfully.")
        : alert("Sorry! Something went wrong.Try Again.");
      res.status === 200 &&
        fetch(`${URL}/allorders`)
          .then((res) => res.json())
          .then((data) => {
            setOrderInfo(data);
          });
    });
  };

  return (
    <div>
      <Container className="pt-5">
        <h1
          style={{ color: "brown" }}
          className="mt-3 mb-4 ml-1"
          data-aos="flip-up"
          data-aos-duration="1500"
        >
          All Order Information Here:
        </h1>
        <Table striped data-aos="fade-up" data-aos-duration="1500">
          <thead className="text-light" style={{ backgroundColor: "brown" }}>
            <tr>
              <th>Payment Id</th>
              <th>Service Name</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Mobile No</th>
              <th>Order Date</th>
              <th>Order State</th>
            </tr>
          </thead>
          <tbody>
            {OrderInfo.map((order) => (
              <SingleOrder
                handleOrder={handleOrder}
                key={order._id}
                order={order}
                order_state={order.order_state}
              ></SingleOrder>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
