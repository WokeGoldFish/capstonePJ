import React from "react";
import { Typography, Button, Divider, Card } from "@mui/material";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";

const stripeKey = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PayForm = ({ receipt, upStep, backStep, customerData, onCaptureCheckout }) => {
  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      const allData = {
        line_items: receipt.live.line_items,
        customer: {
          firstname: customerData.firstName,
          lastname: customerData.lastName,
          email: customerData.email,
        },
        shipping: {
          name: "Primary",
          street: customerData.address1,
          town_city: customerData.city,
          county_state: customerData.province,
          postal_zip_code: customerData.zip,
          country: customerData.country,
        },
        billing:{
          name: customerData.firstName,
          street: customerData.address1,
          town_city: customerData.city,
          postal_zip_code: customerData.zip,
          county_state: customerData.province,
          country: customerData.country,
        },

        fulfillment: {
          shipping_method: customerData.option,
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      onCaptureCheckout(receipt.id, allData);
      upStep();
    }
  };
  return (
    <>
      <Review receipt={receipt} />
      <Divider />

      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripeKey}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={backStep}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="success"
                >
                  Pay {receipt.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
      <br />
      <br />
      <br />
    </>
  );
};

export default PayForm;
