import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, Container, Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import CartStep from "./CartStep"
import ShippingStep from "./ShippingStep"
import { useStateContext } from '../../contexts/AppContextProvider';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import PaymentStep from './PaymentStep';




const comp=[<CartStep/>,<ShippingStep/>,<PaymentStep/>]

const steps = ['Cart', 'Shipping', 'Payment'];

export default function index() {

 const {cartItems,cartTotalAmount,cartQuantityItems,order,setOrder,token}=useStateContext();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if(activeStep===1){

      if(token){
        setOrder((prev)=>({ ...prev,...user}));
      }

      setOrder((prev)=>({
        ...prev, 
        amountCart:cartTotalAmount(),
        cartQuantityItems:cartQuantityItems(),
        
      }));
    }
    if(activeStep===2){
      console.log(order);
    }
    
    

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <Container sx={{my:"16px"}}>
      <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
               
               
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

                <br/>
           <Grid container spacing={1}>
                  {activeStep === steps.length ? (
                    <Paper sx={{p:"15px"}}>
                          <Typography sx={{ mt: 2, mb: 1 }}>
                            <Alert severity='success' variant='filled'>
                                Your order has been processed successfully,
                                  We will contact you on the number you provided within 24 hours to confirm the order and dispatch it directly ,Thank you.
                            </Alert>
                            <br/>
                            <Button variant='outlined'>Review your orders</Button>
                          </Typography>
                          
                    </Paper>
                      ) : (
                        <Grid xs={12} md={8}>
                            <Paper sx={{p:"15px"}}>

                            {/*Steps content*/}
                              <Box>
                                {comp[activeStep]}
                              </Box>

                            {/* Step Controls */}
                            <Stack  direction="row" justifyContent="space-between" sx={{ pt: "32px" }}>
                                {!(activeStep === 0) && <Button startIcon={<KeyboardArrowLeft/>}  variant='contained' onClick={handleBack}>Back </Button>}
                             
                                {
                                  activeStep === 0 && 
                                  <Button endIcon={<KeyboardArrowRight/>}  onClick={handleNext} variant='contained' disabled={cartItems.length===0}>
                                    Proced to shipping
                                  </Button>
                                }
                                {
                                  activeStep === 1 && 
                                  <Button endIcon={<KeyboardArrowRight/>}  onClick={handleNext} variant='contained' disabled={cartItems.length===0}>
                                    Proced to Payment
                                  </Button>
                                }
                                {
                                  activeStep === 2 && 
                                  <Button endIcon={<KeyboardArrowRight/>}  onClick={handleNext} variant='contained' disabled={cartItems.length===0}>
                                    Order Now
                                  </Button>
                                }
                            </Stack>

                            </Paper>
                        </Grid>
                      )}
              {activeStep < 2 && <Grid xs={12} md={4}> 
                    <Paper sx={{p:"15px"}}>
                          <Typography variant="h6" sx={{textAlign:"center"}}>Order information</Typography>
                          <br/>
                          <Typography variant="body1" ><strong>Date:</strong> {`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}</Typography>
                          <Typography variant="body1" ><strong>N° of order:</strong> 9.</Typography>
                          <Typography variant="body1" ><strong>Cart quantity:</strong> {cartQuantityItems()} items.</Typography>
                          <Typography variant="body1" ><strong>Discount:</strong> 0%.</Typography>
                          <Typography variant="body1" ><strong>Shipping Rate:</strong> 450DA.</Typography>
                          <Typography variant="body1" ><strong>Cart amount:</strong> {cartTotalAmount()} DA.</Typography>

                          <Typography variant="h6" sx={{textAlign:"center"}}><strong>Total to pay: </strong>26450DA.</Typography>
                          
                          
                    </Paper>
              </Grid>}
           </Grid>
    </Box>
    </Container>
  );
}