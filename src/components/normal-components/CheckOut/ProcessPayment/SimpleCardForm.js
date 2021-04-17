import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
const SimpleCardForm = (props) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod.id);
      props.handleOrderInfo(paymentMethod.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-3">
      <CardElement />
      <p className="py-2 text-danger">{errorMsg}</p>
      <button
        type="submit"
        className="btn btn-danger my-3 w-100"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};
export default SimpleCardForm;
