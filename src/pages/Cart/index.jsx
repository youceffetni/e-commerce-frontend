import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, Container, Paper, Stack } from '@mui/material';


import CartStep from "./CartStep"
import ShippingStep from "./ShippingStep"
import { useStateContext } from '../../contexts/AppContextProvider';

import PaymentStep from './PaymentStep';
import { KeyboardArrowLeft } from '@mui/icons-material';





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

  React.useEffect(() => {


  switch (activeStep){

    case 0:
      document.title = 'Order Now - Check your cart';
      break;
    
    case 1:
      document.title = 'Order Now - Shipping informations';
      break;

    case 2:
      document.title = 'Order Now - Payment';
      break;
    default:
      document.title = 'Your order finished';
     

  }
   
   


      

  }, [activeStep]);
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
                      <>
                        {activeStep==0 && <CartStep handleNext={handleNext}/>}

                        {activeStep==1 && <ShippingStep handleNext={handleNext}>
                        {!(activeStep === 0) && <Button sx={{flexGrow:1}} startIcon={<KeyboardArrowLeft/>}  variant='contained' onClick={handleBack}>Back </Button>}
                          </ShippingStep>
                       
                        }
                        {activeStep==2 && <PaymentStep handleNext={handleNext}>
                        {!(activeStep === 0) && <Button sx={{flexGrow:1}} startIcon={<KeyboardArrowLeft/>}  variant='contained' onClick={handleBack}>Back </Button>}
                        </PaymentStep>

                        }
                      </>
                      
                      
                      )}
             
          
    </Box>
    </Container>
  );
}