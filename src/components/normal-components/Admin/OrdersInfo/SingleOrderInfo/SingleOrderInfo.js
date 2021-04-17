import React from "react";

export default function SingleOrderInfo(props) {
  const { _id, Product_name, name, address, mobile, date } = props.order;
  return (
    <tr>
      <td>{_id}</td>
      <td>{Product_name}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{mobile}</td>
      <td>{date}</td>
      <td>Pending</td>
    </tr>
  );
}
