import React, { useContext, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { UserContext } from "../../../../App";
import ManageSingleReview from "./ManageSingleReview/ManageSingleReview";

export default function ManageReview() {
  const [, , , , reviews, setReviews, , , URL] = useContext(UserContext);

  useEffect(() => {
    fetch(`${URL}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [URL, setReviews]);
  const handleDeleteReview = (id) => {
    fetch(`${URL}/deletereview/${id}`, {
      method: "Delete",
    }).then((res) => {
      if (res.ok) {
        alert("Review successfully deleted.");

        fetch(`${URL}/reviews`)
          .then((res) => res.json())
          .then((data) => setReviews(data));
      } else {
        alert("Something is wrong.Try again.");
      }
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
          Manage Review Here:
        </h1>
        <Table striped data-aos="fade-up" data-aos-duration="1500">
          <thead className="text-light" style={{ backgroundColor: "brown" }}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Review</th>
              <th>Rating</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <ManageSingleReview
                key={review._id}
                review={review}
                handleDeleteReview={handleDeleteReview}
              ></ManageSingleReview>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
