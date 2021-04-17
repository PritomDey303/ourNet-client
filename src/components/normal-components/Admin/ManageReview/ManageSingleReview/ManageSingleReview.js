import { Rating } from "@material-ui/lab";
import React from "react";

export default function ManageSingleReview(props) {
  const { _id, name, email, review, rating } = props.review;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{review.substring(0, 50)}.....</td>
      <td>
        <Rating name="readOnly" value={rating} readOnly />
      </td>
      <td>
        {" "}
        <div
          className="btn text-danger"
          onClick={(e) => props.handleDeleteReview(_id, e)}
        >
          <i class="fas fa-trash-alt"></i>
        </div>
      </td>
    </tr>
  );
}
