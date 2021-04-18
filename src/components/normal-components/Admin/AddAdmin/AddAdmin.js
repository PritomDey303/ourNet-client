import React, { useContext } from "react";
import { Col, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../App";

export default function AddAdmin() {
  const [, , , , , , , , URL] = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    fetch(`${URL}/addadmin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      res.status === 200
        ? alert("Congratulation! Admin added successfully.")
        : alert("Sorry! something went wrong.Try again later.");
    });
    e.target.reset();
  };
  return (
    <div>
      <Container className="py-5">
        <h1
          style={{ color: "brown" }}
          className="mt-3 mb-4 ml-1"
          data-aos="flip-up"
          data-aos-duration="1500"
        >
          Add Admin Here:
        </h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          data-aos="fade-left"
          data-aos-duration="1500"
          className="bg-brand p-5 shadow"
        >
          <Form.Row>
            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>Admin Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
            </Form.Group>
          </Form.Row>{" "}
          {errors.email && <span className="text-danger">Invalid Email</span>}
          <button
            className="btn btn-danger ml-auto d-block mr-5 btn-lg px-5"
            type="submit"
          >
            Save
          </button>
        </Form>
      </Container>
    </div>
  );
}
