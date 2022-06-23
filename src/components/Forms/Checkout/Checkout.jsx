import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
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
  CircularProgress,
  Divider,
  CssBaseline,
} from "@mui/material";
import { useStyles } from "./CheckoutStyles";
import AddyForm from '../AddyForm';
import PayForm from "../PayForm";
import { commerce } from '../../../lib/commerce'

const steps = ['Shipping address', 'Payment details', 'Confirm Details'];

const Checkout = ({ cart }) => {
    const styles = useStyles(createTheme());
    const [activeStep, setActiveStep] = useState(0);
    const [ checkoutToken , setCheckoutToken ] = useState(null)
    useEffect(()=>{
      const generateToken = async() => {
        try{
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
          
          console.log(token)
          setCheckoutToken(token)
        } catch (error) {
          
        }
      }
      generateToken();
    },[cart])


    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => (activeStep === 0
        ? <AddyForm checkoutToken={checkoutToken}/>
        : <PayForm /> 
    )
  
  
  return (
    <>

      <CssBaseline />
      <Toolbar />
      <main sx={styles.layout}>
        <Paper sx={styles.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={styles.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form/>}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
