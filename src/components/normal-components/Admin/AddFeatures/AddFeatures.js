import AOS from "aos";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Col, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../App";
AOS.init();
export default function AddFeatures() {
  const [, , , , , , Feature, setFeature, URL] = useContext(UserContext);
  const [imageUrl, setImageUrl] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  ///////onsubmit////
  const onSubmit = (data, e) => {
    console.log(data);
    const featureData = {
      title: data.title,
      description: data.description,
      img: imageUrl,
    };
    console.log(featureData);
    const newArr = [...Feature, featureData];

    fetch(`${URL}/addfeatures`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(featureData),
    }).then((res) => {
      console.log(res);
      res.status === 200 && setFeature(newArr);
      res.status === 200
        ? alert("Congratulation!Feature updated successfully.")
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
          Add Features Here:
        </h1>

        <Form
          Submit={handleSubmit(onSubmit)}
          data-aos="fade-left"
          data-aos-duration="1500"
          className="bg-brand p-5 shadow"
        >
          <Form.Row>
            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a title"
                {...register("title", { required: true })}
              />
            </Form.Group>
            {errors.title && <span className="text-danger">Invalid Title</span>}

            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  description "
                {...register("description", { required: true })}
              />
            </Form.Group>
          </Form.Row>
          {errors.description && (
            <span className="text-danger">Invalid Description</span>
          )}
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFile1">
              <Form.Label>Feature Image</Form.Label>
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
