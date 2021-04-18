import React from "react";

export default function SingleOrderInfo(props) {
  const {
    _id,
    service_name,
    name,
    address,
    mobile,
    date,
    order_state,
  } = props.order;
  return (
    <tr>
      <td>{_id}</td>
      <td>{service_name}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{mobile}</td>
      <td>{date}</td>
      <td>
        {order_state === "Pending" ? (
          <span className="text-danger">{order_state}</span>
        ) : (
          <span className="text-success">{order_state}</span>
        )}{" "}
      </td>
    </tr>
  );
}
