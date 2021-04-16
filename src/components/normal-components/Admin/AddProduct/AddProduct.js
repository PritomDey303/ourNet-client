import axios from "axios";
import React, { useContext, useState } from "react";
import { Col, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../App";

export default function AddProduct() {
  const [, , Product, setProduct, , , , , URL] = useContext(UserContext);
  const [imageUrl, setImageUrl] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  ///////onsubmit////
  const onSubmit = (data, e) => {
    const productData = {
      product_name: data.product_name,
      description: data.description,
      price: parseInt(data.price),
      img: imageUrl,
    };
    const newArr = [...Product, productData];

    fetch(`${URL}/addproducts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => {
      console.log(res);
      res.status === 200 && setProduct(newArr);
      res.status === 200
        ? alert("Congratulation! Product added successfully.")
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                {...register("product_name", { required: true })}
              />
            </Form.Group>
            {errors.product_name && (
              <span className="text-danger">Invalid Product Name</span>
            )}

            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product description "
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
