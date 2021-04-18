import React from "react";
import { Form } from "react-bootstrap";

export default function SingleOrder(props) {
  const {
    _id,
    service_name,
    name,
    address,
    mobile,
    date,
    payment_id,
  } = props.order;

  return (
    <tr>
      <td>{payment_id} </td>
      <td>{service_name}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{mobile}</td>
      <td>{date}</td>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Example select</Form.Label>
        <Form.Control
          as="select"
          value={props.order_state}
          onChange={(e) => props.handleOrder(_id, e.target.value)}
        >
          <option className="text-danger">Pending</option>
          <option className="text-warning">Ongoing</option>
          <option className="text-success">Completed</option>
        </Form.Control>
      </Form.Group>
    </tr>
  );
}
