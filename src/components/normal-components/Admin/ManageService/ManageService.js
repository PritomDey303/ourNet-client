import AOS from "aos";
import React, { useContext, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { UserContext } from "../../../../App";
import SingleManageService from "./SingleManageService/SingleManageService";
AOS.init();
export default function ManageService() {
  const [, , Service, setService, , , , , URL] = useContext(UserContext);

  useEffect(() => {
    fetch(`${URL}/services`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [URL, setService]);

  const handleDeleteService = (id, e) => {
    const newArr = Service.filter((pd) => pd._id !== id);
    fetch(`${URL}/deleteService/${id}`, {
      method: "Delete",
    }).then((res) => {
      if (res.ok) {
        alert("Service successfully deleted.");

        setService(newArr);
      } else {
        alert("Something is wrong.Try again.");
      }
    });
  };
  return (
    <Container className="pt-5">
      <h1
        style={{ color: "brown" }}
        className="mt-3 mb-4 ml-1"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        Service Info:
      </h1>
      <Table striped data-aos="fade-up" data-aos-duration="1500">
        <thead className="text-light" style={{ backgroundColor: "brown" }}>
          <tr>
            <th>Id</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Service.map((singleService) => (
            <SingleManageService
              key={singleService._id}
              singleService={singleService}
              handleDeleteService={handleDeleteService}
            ></SingleManageService>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
