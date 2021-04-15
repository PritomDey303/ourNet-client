import { Rating } from "@material-ui/lab";
import AOS from "aos";
import React, { useState } from "react";
import { Col, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

AOS.init();
export default function ReviewMain() {
  const [value, setValue] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="py-5 bg-brand">
      <Container>
        <h1
          className="text-center text-dark py-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Please Give Us Your Precius Review
        </h1>
        <Form
          data-aos="flip-down"
          data-aos-duration="1500"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-danger">Invalid Name</span>}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                size="lg"
                type="email"
                placeholder="Enter Your Email"
                {...register("email", {
                  pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.email && (
                <span className="text-danger">Invalid Email.</span>
              )}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={3}
                {...register("review", { required: true })}
                placeholder="Please Write Your Review Here.(Max 200 words)."
              />
              {errors.review && (
                <span className="text-danger">Please give us feedback.</span>
              )}
            </Form.Group>
          </Form.Row>
          <div className="text-dark text-center">
            <span style={{ fontSize: "20px" }}>Rating</span>: <br />{" "}
            <Rating
              name="pristine"
              {...register("rating", { required: true })}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <br />
            {errors.rating && (
              <span className="text-danger">Please Rate Us.</span>
            )}
          </div>

          <button
            className="btn btn-warning text-dark w-100 py-2"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Container>
    </div>
  );
}
