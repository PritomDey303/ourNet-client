import React from "react";

export default function SingleManageFeatures(props) {
  const { _id, title, description } = props.singleFeature;

  return (
    <tr>
      <td>{_id}</td>
      <td>{title}</td>
      <td>{description.substring(0, 50)}.....</td>
      <td>
        <div
          className="btn text-danger"
          onClick={(e) => props.handleDeleteFeature(_id, e)}
        >
          <i class="fas fa-trash-alt"></i>
        </div>
      </td>
    </tr>
  );
}
