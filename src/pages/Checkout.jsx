import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AddressForm from "../components/AddressForm";
import PaymentsForm from "../components/PaymentsForm";
import ReviewForm from "../components/ReviewForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../feature/cart-slice";
import { clearCheckoutInformation } from "../feature/checkout-slice";
import { Link } from "react-router-dom";

const steps = ["Shipping Address", "Payment Details", "Review Order"];

function getStepContent(activeStep) {
  switch (activeStep) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentsForm />;
    case 2:
      return <ReviewForm />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeStep === steps.length) {
      dispatch(clearCart());
      dispatch(clearCheckoutInformation());
    }
  }, [activeStep]);

  function handleNext() {
    setActiveStep(activeStep + 1);
  }
  function handleBack() {
    setActiveStep(activeStep - 1);
  }
  return (
    <Container
      component="section"
      maxWidth="lg"
      sx={{
        mb: 4,
      }}
    >
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper
          activeStep={activeStep}
          sx={{
            pt: 3,
            pb: 5,
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order
            </Typography>
            <Typography>
              Your order number is #12234. We have emailed you the details regarding your order confirmation.
            </Typography>
            <Link to="/">Shop More</Link>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button
                  sx={{
                    mt: 3,
                    ml: 1,
                  }}
                  onClick={handleBack}
                  variant="contained"
                >
                  Back
                </Button>
              )}
              <Button
                sx={{
                  mt: 3,
                  ml: 1,
                }}
                onClick={handleNext}
                variant="contained"
              >
                {activeStep === steps.length - 1 ? "Place Order" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
}
