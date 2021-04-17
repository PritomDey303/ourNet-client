import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51Ih8MOCvAm8ZFRSGoH5BeEuUj7cS4CGojtKHai4kmGbNSSOrUSCPcuu2NYLhVUHHlRMWWphG3B8yc6V3lsi9nVrm00MCONx4YU"
);

export default function ProcessPayment() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </Elements>
    </div>
  );
}
