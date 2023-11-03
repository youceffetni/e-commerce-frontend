import {  KeyboardArrowRight } from '@mui/icons-material'
import { Alert, Button, Paper, Typography,Stack,Box } from '@mui/material'
import React from 'react'
import { useStateContext } from '../../contexts/AppContextProvider';

export default function PaymentStep({children,handleNext}) {
  const { cartItems} = useStateContext();
  return (
    <Paper sx={{p:"15px"}}>

        <Typography variant="h6" sx={{textAlign:"center"}}>Phase of payment</Typography>
        <br/>
     
        <Alert severity='info' >
             
            The electronic payment is not  available Now, so you must pay upon receiving your order package
        </Alert>

        <Stack  sx={{flexDirection:{xs:"column",sm:"row"} ,gap:"8px",pt: "32px" }}>
            
           
               {children}
       
            
            

           
            
              <Button sx={{ width:{sm:"50%",}, }} endIcon={<KeyboardArrowRight/>}  onClick={handleNext} variant='contained' disabled={cartItems.length===0}>
                Order Now
              </Button>
        
                                
                                    
                                    
                                    
        </Stack>


    </Paper>
  )
}
