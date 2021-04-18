import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AOS from "aos";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../../App";
import Contact from "../../shared-components/Contact/Contact";
import Footer from "../../shared-components/Footer/Footer";
import Navigation from "../../shared-components/Navigation/Navigation";
import "./CheckOut.css";
import SimpleCardForm from "./ProcessPayment/SimpleCardForm";
AOS.init();
export default function CheckOut() {
  const stripePromise = loadStripe(
    "pk_test_51Ih8MOCvAm8ZFRSGoH5BeEuUj7cS4CGojtKHai4kmGbNSSOrUSCPcuu2NYLhVUHHlRMWWphG3B8yc6V3lsi9nVrm00MCONx4YU"
  );
  const [LoggedInUser, , Service, , , , , , URL] = useContext(UserContext);
  const { p_id } = useParams();
  const [orderInfo, setOrderInfo] = useState(null);
  let history = useHistory();

  console.log(p_id);
  const requiredService = Service.find((sr) => sr._id === p_id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setOrderInfo(data);
  };
  const handleOrderInfo = (payment_id) => {
    const orderData = {
      payment_id: payment_id,
      ...orderInfo,
      order_state: "Pending",
    };
    fetch(`${URL}/addorders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    }).then((res) => {
      console.log(res);
      res.status === 200
        ? alert("Congratulation! Order Placed successfully.")
        : alert("Sorry! something went wrong.Try again later.");
      history.push("/");
    });
  };
  return (
    <div>
      <Navigation />
      <div
        className="checkout-form w-50 mx-auto my-5 bg-brand p-4"
        style={orderInfo ? { display: "none" } : { display: "block" }}
      >
        <h1 style={{ color: "brown" }} data-aos="fade-right">
          Checkout Info:
        </h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="w-100"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="hidden"
                value={requiredService._id}
                {...register("Service_Id")}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="hidden"
                value={new Date().toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
                {...register("date")}
              />
            </Form.Group>
            <Form.Label style={{ color: "brown" }}>Service Name:</Form.Label>

            <Form.Control
              type="text"
              placeholder="Service Name"
              {...register("service_name")}
              value={requiredService.service_name}
              readOnly
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: "brown" }}>
              Service Cost(in USD)
            </Form.Label>

            <Form.Control
              type="number"
              placeholder="Price"
              value={requiredService.price}
              {...register("price")}
              readOnly
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: "brown" }}>Customer Name</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              {...register("name")}
              value={LoggedInUser.displayName}
              readOnly
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: "brown" }}>Customer Email</Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter Your email"
              {...register("email")}
              value={LoggedInUser.email}
              readOnly
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: "brown" }}>Customer Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Customer Address"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-danger">Invalid Address</span>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: "brown" }}>Mobile No.</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Mobile No"
              {...register("mobile", { required: true })}
            />
            {errors.mobile && (
              <span className="text-danger">Invalid Mobile Number</span>
            )}
          </Form.Group>

          <button className="btn btn-danger w-100" type="submit">
            Submit
          </button>
        </Form>
      </div>

      {/* payment form */}
      <div
        className="paymentInfo w-50 mx-auto my-5 bg-brand p-4"
        data-aos="fade-up"
        style={orderInfo ? { display: "block" } : { display: "none" }}
      >
        <h1 style={{ color: "brown" }}>Please Pay Here:</h1>
        <Elements stripe={stripePromise}>
          <SimpleCardForm handleOrderInfo={handleOrderInfo} />
        </Elements>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
