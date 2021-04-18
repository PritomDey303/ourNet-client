import AOS from "aos";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Col, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../App";
AOS.init();
export default function AddService() {
  const [, , , setService, , , , , URL] = useContext(UserContext);
  const [imageUrl, setImageUrl] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  ///////onsubmit////
  const onSubmit = (data, e) => {
    const serviceData = {
      service_name: data.service_name,
      description: data.description,
      price: parseInt(data.price),
      img: imageUrl,
    };

    fetch(`${URL}/addservices`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((res) => {
      console.log(res);
      res.status === 200 &&
        fetch(`${URL}/services`)
          .then((res) => res.json())
          .then((data) => setService(data));

      res.status === 200
        ? alert("Congratulation! Service added successfully.")
        : alert("Sorry! something went wrong.Try again later.");
    });

    e.preventDefault();
    e.target.reset();
  };
  /////handleImage//////
  const handleImage = (e) => {
    console.log(e);
    const imageData = new FormData();
    imageData.set("key", "7f97b5f40e0c4ea31cd47a0f9592af70");
    imageData.append("image", e.target.files[0]);
    console.log(imageData);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.status);
        response.data.status === 200 && setImageUrl(response.data.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          Add Services Here:
        </h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          data-aos="fade-left"
          data-aos-duration="1500"
          className="bg-brand p-5 shadow"
        >
          <Form.Row>
            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>Service Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Service name"
                {...register("service_name", { required: true })}
              />
            </Form.Group>
            {errors.service_name && (
              <span className="text-danger">Invalid Service Name</span>
            )}

            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>
                Service Features{" "}
                <small className="text-success">
                  ( Each feature should be separated by "/")
                </small>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Example: Unlimited Browsing/12AM- 9PM 70mbps/100 mbps YouTube"
                {...register("description", { required: true })}
              />
            </Form.Group>
          </Form.Row>
          {errors.description && (
            <span className="text-danger">Invalid Description</span>
          )}
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Price Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                {...register("price", { required: true })}
              />
            </Form.Group>
            {errors.price && <span className="text-danger">Invalid Price</span>}
            <Form.Group as={Col} controlId="formGridFile1">
              <Form.Label>Product Image</Form.Label>
              <Form.Control type="file" onChange={handleImage} required />
            </Form.Group>
          </Form.Row>
          {imageUrl ? (
            <button
              className="btn btn-primary ml-auto d-block mr-5 btn-lg px-5"
              type="submit"
            >
              Save
            </button>
          ) : (
            <button
              className="btn btn-primary ml-auto d-block mr-5 btn-lg px-5"
              type="submit"
              disabled
            >
              Save
            </button>
          )}
        </Form>
      </Container>
    </div>
  );
}
