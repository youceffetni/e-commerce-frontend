

import { Alert, AlertTitle, Box, Container, Snackbar } from '@mui/material';
import Product from './Product'

import Grid from '@mui/material/Unstable_Grid2';
import { useStateContext } from '../../contexts/AppContextProvider';
import { useState } from 'react';
import { Done } from '@mui/icons-material';



export default function index() {
  const {products}=useStateContext();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (


      <>
        <Container sx={{mt:"16px"}}>


            <Grid container spacing={2} >

              {products && products.map((product,index)=>(
              

                  <Grid  key={index} xs={12} sm={6} md={4} sx={{justifyContent:"center"}}>
                    <Product handleClick={handleClick} product={product}/>
                  </Grid>

              
              )

            )}

            </Grid>

        </Container>


        <Snackbar anchorOrigin={{ vertical:"bottom", horizontal:"right" }} open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert variant ="filled" onClose={handleClose} sx={{width:"100%",padding:"12px 30px"}}>
                Added to cart 
            </Alert>
            
        </Snackbar>
      
      </>
  )
}
