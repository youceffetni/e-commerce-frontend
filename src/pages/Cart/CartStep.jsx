
import { useStateContext } from '../../contexts/AppContextProvider'

import Box from '@mui/material/Box';
import { Alert, Button ,IconButton, Paper, Stack, Typography } from '@mui/material';
import { Add,Close, Remove } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import {  KeyboardArrowRight } from '@mui/icons-material';


const CustomButton = styled(Button)({
  minWidth:"32px",
  height:"32px",
  padding:"2px",
  borderRadius:"100%"
});



export default function CartStep({handleNext}) {
  const {cartItems,removeCartItems,handleQuantity,cartTotalAmount,cartQuantityItems}=useStateContext();


  const Item=({item})=>{


    return (<Paper elevation={3} sx={{position:"relative"}}>
                               
    <Stack direction={"row"} alignItems={"center"}>
       <Box sx={{maxWidth:"140px"}}>
           <img src={item.image}/>
       </Box>
       <Box sx={{p:"15px"}}>
         <Typography  variant="h6" >{item.title}</Typography>
         <Typography  variant="body2" sx={{color:"text.secondary"}}>{item.price}DA x {item.Quantity}</Typography>
         <Typography  variant="body1" color="error">{item.price*item.Quantity}DA</Typography>
          <br/>
          
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <CustomButton onClick={()=>handleQuantity("+",item)}  variant="outlined"  >
              <Add/>
            </CustomButton>
            <Typography variant="h6">{item.Quantity}</Typography>
            <CustomButton onClick={()=>handleQuantity("-",item)} variant='outlined'  size="small" disabled={item.Quantity <=1}>
              <Remove/>
            </CustomButton>
        </Stack>
       </Box>
  
       {cartItems.length>1 && <IconButton onClick={()=>removeCartItems(item)} sx={{position:"absolute",top:0,right:0}}>
         <Close/>
       </IconButton>}
    </Stack>
  </Paper>  );
  }


 
  return (



 
      <Stack sx={{flexDirection:{xs:"column",md:"row"},gap:"16px"}}  >
        <Paper sx={{flexGrow:1,p:"15px"}}>
       
              <Typography variant='h6' sx={{textAlign:'center'}}>Your cart shopping</Typography>
              <br/>
              <Stack spacing={2}>
                    
                  {cartItems.length >0 && cartItems.map((item,i)=><Item key={i} item={item}/>)}
                  {cartItems.length <1 && <Alert severity='warning'>Cart is empty</Alert>}
                        
              </Stack>
                <br/>
         
               
               
                <Button sx={{width:"100%"}} endIcon={<KeyboardArrowRight/>}  onClick={handleNext} variant='contained' disabled={cartItems.length===0}>
                  Proced to shipping
                </Button>
          
            
        </Paper>
        
        <Paper sx={{p:"15px" ,maxHeight:"275px"}}>
              <Typography variant="h6" sx={{textAlign:"center"}}>Order information</Typography>
              <br/>
              <Typography variant="body1" ><strong>Date:</strong> {`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}</Typography>
              <Typography variant="body1" ><strong>N° of order:</strong> 9.</Typography>
              <Typography variant="body1" ><strong>Cart quantity:</strong> {cartQuantityItems()} items.</Typography>
              <Typography variant="body1" ><strong>Discount:</strong> 0%.</Typography>
              <Typography variant="body1" ><strong>Shipping Rate:</strong> 450DA.</Typography>
              <Typography variant="body1" ><strong>Cart amount:</strong> {cartTotalAmount()} DA.</Typography>
              <br/>
              <Typography variant="h6" sx={{textAlign:{sm:"center"}}}><strong>Total to pay: </strong><span style={{color:"#090"}}>35555 DA</span></Typography>
              
              
        </Paper>
       
       </Stack>
   
  
  );
}





