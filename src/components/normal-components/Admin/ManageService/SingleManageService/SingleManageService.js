import React from "react";

export default function SingleManageService(props) {
  const { _id, service_name, description, price } = props.singleService;
  console.log(props.singleService);
  return (
    <tr>
      <td>{_id}</td>
      <td>{service_name}</td>
      <td>{description.substring(0, 50)}......</td>
      <td>$ {price}</td>
      <td>
        <div
          className="btn text-danger"
          onClick={(e) => props.handleDeleteService(_id, e)}
        >
          <i class="fas fa-trash-alt"></i>
        </div>
      </td>
    </tr>
  );
}
