
// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Box,
//   Typography,
//   FormControlLabel,
//   Checkbox,
//   RadioGroup,
//   Radio,
//   Stepper,
//   Step,
//   StepLabel,
//   Card,
//   CardContent,
//   IconButton
// } from "@mui/material";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// function PaymentPage() {
//   const [activeStep, setActiveStep] = useState(0);
//   const steps = ["Choose Payment", "Payment", "Review"];

//   // Handle "Next" button click
//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   // Handle "Back" button click
//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <Box sx={{ width: "100%", p: 3 }}>
//       {/* Stepper */}
//       <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
//         {steps.map((label, index) => (
//           <Step key={label}>
//             <StepLabel
//               StepIconProps={{
//                 sx: {
//                   '&.Mui-active': {
//                     color: '#e12b6e ', // Color for active step
//                   },
//                   '&.Mui-completed': {
//                     color: '#e12b6e ', // Color for completed steps
//                   },
//                 },
//               }}
//             >
//               {label}
//             </StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       {/* Step 1: Shipping */}
//       {activeStep === 0 && (
//         <Card sx={{ maxWidth: 500, mx: "auto" }}>
//           <CardContent>
//             <Typography variant="h6">Your New Card</Typography>
//             <Box mt={2}>
//               <TextField
//                 fullWidth
//                 label="Card Number"
//                 defaultValue="**** **** **** 6522"
//                 variant="outlined"
//                 sx={{ mb: 2 }}
//               />
//               <TextField
//                 fullWidth
//                 label="Card Holder Name"
//                 defaultValue="Hikmet Atceken"
//                 variant="outlined"
//                 sx={{ mb: 2 }}
//               />
//               <Box sx={{ display: "flex", gap: 2 }}>
//                 <TextField
//                   label="Expiry Date"
//                   defaultValue="07/23"
//                   variant="outlined"
//                 />
//                 <TextField
//                   label="CVC/CVV"
//                   defaultValue="***"
//                   variant="outlined"
//                 />
//               </Box>
//               <FormControlLabel
//                 control={<Checkbox />}
//                 label="Save your card information. It's confidential."
//                 sx={{ mt: 2 }}
//               />
//               <Box mt={2}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   sx={{
//                     backgroundColor: '#e12b6e ',
//                     '&:hover': {
//                       backgroundColor: '#e12b6e ',
//                     },
//                     color: 'white',
//                   }}
//                   onClick={handleNext}
//                 >
//                   Confirm
//                 </Button>
//               </Box>
//             </Box>
//           </CardContent>
//         </Card>
//       )}

//       {/* Step 2: Payment Method */}
//       {activeStep === 1 && (
//         <Card sx={{ maxWidth: 500, mx: "auto" }}>
//           <CardContent>
//             <Typography variant="h6">Choose a Payment Method</Typography>
//             <Box mt={2}>
//               <RadioGroup defaultValue="credit-card">
//                 <FormControlLabel
//                   value="credit-card"
//                   control={<Radio />}
//                   label="Credit Card"
//                 />
//                 <FormControlLabel
//                   value="google-pay"
//                   control={<Radio />}
//                   label="Google Pay"
//                 />
//                 <FormControlLabel
//                   value="apple-pay"
//                   control={<Radio />}
//                   label="Apple Pay"
//                 />
//               </RadioGroup>
//               <TextField
//                 fullWidth
//                 label="Name on Card"
//                 defaultValue="Hikmet Atceken"
//                 variant="outlined"
//                 sx={{ mb: 2 }}
//               />
//               <TextField
//                 fullWidth
//                 label="Card Number"
//                 defaultValue="**** **** **** 6522"
//                 variant="outlined"
//                 sx={{ mb: 2 }}
//               />
//               <Box sx={{ display: "flex", gap: 2 }}>
//                 <TextField
//                   label="Expiry Date"
//                   defaultValue="07/23"
//                   variant="outlined"
//                 />
//                 <TextField
//                   label="Security Code"
//                   defaultValue="***"
//                   variant="outlined"
//                 />
//               </Box>
//               <FormControlLabel
//                 control={<Checkbox />}
//                 label="My billing address is the same as my shipping address."
//                 sx={{ mt: 2 }}
//               />
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
//                 <IconButton
//                   color="primary"
//                   onClick={handleBack}
//                   sx={{
//                     backgroundColor: 'lightgray',
//                     '&:hover': {
//                       backgroundColor: '#d3d3d3',
//                     },
//                   }}
//                 >
//                   <ArrowBackIcon />
//                 </IconButton>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: '#e12b6e ',
//                     '&:hover': {
//                       backgroundColor: '#e12b6e ',
//                     },
//                     color: 'white',
//                   }}
//                   onClick={handleNext}
//                 >
//                   Confirm and continue
//                 </Button>
//               </Box>
//             </Box>
//           </CardContent>
//         </Card>
//       )}

//       {/* Step 3: Review Order */}
//       {activeStep === 2 && (
//         <Card sx={{ maxWidth: 500, mx: "auto" }}>
//           <CardContent>
//             <Typography variant="h6">Order Summary</Typography>
//             <Box mt={2}>
//               <Typography>Subtotal: $150.00</Typography>
//               <Typography>Delivery: $9.90</Typography>
//               <Typography>Total: $159.90</Typography>
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
//                 <IconButton
//                   color="primary"
//                   onClick={handleBack}
//                   sx={{
//                     backgroundColor: 'lightgray',
//                     '&:hover': {
//                       backgroundColor: '#d3d3d3',
//                     },
//                   }}
//                 >
//                   <ArrowBackIcon />
//                 </IconButton>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: '#e12b6e ',
//                     '&:hover': {
//                       backgroundColor: '#e12b6e ',
//                     },
//                     color: 'white',
//                   }}
//                   onClick={handleNext}
//                 >
//                   Submit Order
//                 </Button>
//               </Box>
//             </Box>
//           </CardContent>
//         </Card>
//       )}
//     </Box>
//   );
// }

// export default PaymentPage;
import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  IconButton,
  Snackbar
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function PaymentPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvc: "",
  });

  const steps = ["Choose Payment", "Payment", "Review"];

  const handleNext = () => {
    // Add validation logic before moving to the next step
    if (activeStep === 0 && !paymentDetails.cardNumber) {
      alert("Please enter a valid card number.");
      return;
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Simulate order submission
    console.log("Order submitted:", paymentDetails);
    setSnackbarOpen(true); // Show success message
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      {/* Stepper */}
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconProps={{
                sx: {
                  '&.Mui-active': {
                    color: '#e12b6e', // Color for active step
                  },
                  '&.Mui-completed': {
                    color: '#e12b6e', // Color for completed steps
                  },
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step 1: Card Information */}
      {activeStep === 0 && (
        <Card sx={{ maxWidth: 500, mx: "auto" }}>
          <CardContent>
            <Typography variant="h6">Your New Card</Typography>
            <Box mt={2}>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                value={paymentDetails.cardNumber}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Card Holder Name"
                variant="outlined"
                value={paymentDetails.cardHolderName}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardHolderName: e.target.value })}
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  label="Expiry Date"
                  variant="outlined"
                  value={paymentDetails.expiryDate}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                />
                <TextField
                  label="CVC/CVV"
                  variant="outlined"
                  value={paymentDetails.cvc}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, cvc: e.target.value })}
                />
              </Box>
              <FormControlLabel
                control={<Checkbox />}
                label="Save your card information. It's confidential."
                sx={{ mt: 2 }}
              />
              <Box mt={2}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: '#e12b6e',
                    '&:hover': {
                      backgroundColor: '#e12b6e',
                    },
                    color: 'white',
                  }}
                  onClick={handleNext}
                >
                  Confirm
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Payment Method */}
      {activeStep === 1 && (
        <Card sx={{ maxWidth: 500, mx: "auto" }}>
          <CardContent>
            <Typography variant="h6">Choose a Payment Method</Typography>
            <Box mt={2}>
              <RadioGroup defaultValue="credit-card">
                <FormControlLabel
                  value="credit-card"
                  control={<Radio />}
                  label="Credit Card"
                />
                <FormControlLabel
                  value="google-pay"
                  control={<Radio />}
                  label="Google Pay"
                />
                <FormControlLabel
                  value="apple-pay"
                  control={<Radio />}
                  label="Apple Pay"
                />
              </RadioGroup>
              <TextField
                fullWidth
                label="Name on Card"
                variant="outlined"
                value={paymentDetails.cardHolderName}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                value={paymentDetails.cardNumber}
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  label="Expiry Date"
                  variant="outlined"
                  value={paymentDetails.expiryDate}
                />
                <TextField
                  label="Security Code"
                  variant="outlined"
                  value={paymentDetails.cvc}
                />
              </Box>
              <FormControlLabel
                control={<Checkbox />}
                label="My billing address is the same as my shipping address."
                sx={{ mt: 2 }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                <IconButton
                  color="primary"
                  onClick={handleBack}
                  sx={{
                    backgroundColor: 'lightgray',
                    '&:hover': {
                      backgroundColor: '#d3d3d3',
                    },
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#e12b6e',
                    '&:hover': {
                      backgroundColor: '#e12b6e',
                    },
                    color: 'white',
                  }}
                  onClick={handleNext}
                >
                  Confirm and continue
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Review Order */}
      {activeStep === 2 && (
        <Card sx={{ maxWidth: 500, mx: "auto" }}>
          <CardContent>
            <Typography variant="h6">Order Summary</Typography>
            <Box mt={2}>
              <Typography>Subtotal: $150.00</Typography>
              <Typography>Delivery: $9.90</Typography>
              <Typography>Total: $159.90</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                <IconButton
                  color="primary"
                  onClick={handleBack}
                  sx={{
                    backgroundColor: 'lightgray',
                    '&:hover': {
                      backgroundColor: '#d3d3d3',
                    },
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#e12b6e',
                    '&:hover': {
                      backgroundColor: '#e12b6e',
                    },
                    color: 'white',
                  }}
                  onClick={handleSubmit}
                >
                  Submit Order
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Snackbar for submission feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Order submitted successfully!"
      />
    </Box>
  );
}

export default PaymentPage;

