import React, { useContext, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { UserContext } from "../../../../App";
import SingleManageFeatures from "./SingleManageFeatures/SingleManageFeatures";

export default function ManageFeatures() {
  const [, , , , , , Feature, setFeature, URL] = useContext(UserContext);

  useEffect(() => {
    fetch(`${URL}/features`)
      .then((res) => res.json())
      .then((data) => {
        setFeature(data);
      });
  }, [URL, setFeature]);
  console.log(Feature);
  const handleDeleteFeature = (id) => {
    fetch(`${URL}/deletefeature/${id}`, {
      method: "Delete",
    }).then((res) => {
      if (res.ok) {
        alert("Feature successfully deleted.");

        fetch(`${URL}/features`)
          .then((res) => res.json())
          .then((data) => setFeature(data));
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
          Manage Features Here:
        </h1>
        <Table striped data-aos="fade-up" data-aos-duration="1500">
          <thead className="text-light" style={{ backgroundColor: "brown" }}>
            <tr>
              <th>Feature Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Delete Review</th>
            </tr>
          </thead>
          <tbody>
            {Feature.map((singleFeature) => (
              <SingleManageFeatures
                key={singleFeature._id}
                singleFeature={singleFeature}
                handleDeleteFeature={handleDeleteFeature}
              ></SingleManageFeatures>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
