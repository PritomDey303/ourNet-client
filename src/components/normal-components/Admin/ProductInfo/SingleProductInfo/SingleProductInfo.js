import React from "react";

export default function SingleProductInfo(props) {
  const { _id, product_name, description, price } = props.singleProduct;
  return (
    <tr>
      <td>{_id}</td>
      <td>{product_name}</td>
      <td>{description.substring(0, 50)}......</td>
      <td>$ {price}</td>
      <td>
        <div
          className="btn text-danger"
          onClick={(e) => props.handleDeleteProduct(_id, e)}
        >
          <i class="fas fa-trash-alt"></i>
        </div>
      </td>
    </tr>
  );
}
