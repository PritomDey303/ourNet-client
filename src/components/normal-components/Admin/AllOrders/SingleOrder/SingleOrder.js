import React from "react";

export default function SingleOrder(props) {
  const {
    _id,
    service_name,
    name,
    address,
    mobile,
    date,
    payment_id,
    order_state,
  } = props.order;
  return (
    <tr>
      <td>{payment_id} </td>
      <td>{service_name}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{mobile}</td>
      <td>{date}</td>
      {order_state === "Pending" ? (
        <button
          className="btn btn-danger text-light"
          onClick={() => props.handleOrder(_id)}
        >
          Complete
        </button>
      ) : (
        <span className="text-success">Completed</span>
      )}
    </tr>
  );
}
