import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  Grid,
  createTheme,
  Paper,
  StepLabel,
  Toolbar,
  Stepper,
  Step,
  Stack,
  CircularProgress,
  Divider,
  CssBaseline,
} from "@mui/material";
import { useStyles } from "./CheckoutStyles";
import AddyForm from "../AddyForm";
import PayForm from "../PayForm";
import { commerce } from "../../../lib/commerce";

const steps = ["Shipping Address", "Confirm Order Details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const styles = useStyles(createTheme());
  const navi = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [receipt, setReceipt] = useState(null);
  const [customerData, setCustomerData] = useState({});
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setReceipt(token);
      } catch (error) {
        navi.pushState('/')
      }
    };
    generateToken();
  }, [cart]);

  const upStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setCustomerData(data);
    upStep();
  };

  const Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5" style={{marginTop:'5%'}}>
            Thank You For Shopping With Us, {order.customer.firstname} {order.customer.lastname}
          </Typography>
          <Divider sx={styles.divider}/>
          <Typography variant="subtitle2">Order ref:{order.customer_reference}</Typography>{" "}
        </div>
        <br />
        <Button component={Link} to="/products" variant="outlined" type="button">
          Back to Shopping
        </Button>
      </>
    ) : (
      <div style={{ marginLeft: '15%'}} sx={styles.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    <>
      <Typography variant="h5">Error</Typography>
      <br />
      <Button componet={Link} to="/products" variant="outlined" type="button">
        Back to Shopping
      </Button>
    </>;
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddyForm receipt={receipt} next={next} />
    ) : (
      <PayForm
        customerData={customerData}
        receipt={receipt}
        upStep={upStep}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
      />
    );

  return (
    <>
      <CssBaseline />
      <Toolbar />
      <main sx={styles.layout}>
        <Paper maxWidth={1} sx={styles.paper} xs={12}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stack>
            <Stepper activeStep={activeStep} sx={styles.stepper} xs={12}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
          {activeStep === steps.length ? <Confirmation /> : receipt && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
