
import { useStateContext } from '../../contexts/AppContextProvider'

import Box from '@mui/material/Box';
import { Alert, Button ,IconButton, Paper, Stack, Typography } from '@mui/material';
import { Add,Close, Remove } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';



const CustomButton = styled(Button)({
  minWidth:"32px",
  height:"32px",
  padding:"2px",
  borderRadius:"100%"
});



export default function CartStep() {
  const {cartItems,removeCartItems,handleQuantity}=useStateContext();


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
  
       {cartItems.length>1 && <IconButton onClick={()=>removeCartItems(item)} sx={{position:"absolute",top:10,right:16}}>
         <Close/>
       </IconButton>}
    </Stack>
  </Paper>  );
  }


 
  return (



        <>
          <Typography variant='h6' sx={{textAlign:'center'}}>Your cart shopping</Typography>
          <br/>
          <Stack spacing={2}>
                
              {cartItems.length >0 && cartItems.map((item,i)=><Item key={i} item={item}/>)}
              {cartItems.length <1 && <Alert severity='warning'>Cart is empty</Alert>}
                    
          </Stack>
        </>
  
  );
}





