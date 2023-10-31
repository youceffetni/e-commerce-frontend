import { useTheme } from '@emotion/react';

import { Add, Remove } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete';

import { Avatar, Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { useStateContext } from '../../contexts/AppContextProvider';
import styled from '@emotion/styled';

const CustomButton = styled(Button)({
  minWidth:"32px",
  height:"32px",
  padding:"2px",
  borderRadius:"100%"
});
export default function CartItem({item}) {

  const {_setCartItems,removeCartItems,handleQuantity}=useStateContext();





 
  const theme=useTheme();
  return (
                <Stack
                      sx={{
                          bgcolor:"background.default",
                          border:`1px solid ${theme.palette.border}`,
                          p:"8px",
                          borderRadius:"8px",
                          minWidth:"100%"
                      }} 
                      direction={"row"} 
                      alignItems={"center"} 
                      justifyContent={"space-between"} 
                      
                >
                  <Stack alignItems={"center"} >
                      <CustomButton onClick={()=>handleQuantity("+",item)}  variant="outlined"  >
                        <Add/>
                      </CustomButton>
                      <Typography variant="h6">{item.Quantity}</Typography>
                      <CustomButton onClick={()=>handleQuantity("-",item)} variant='outlined'  size="small" disabled={item.Quantity <=1}>
                        <Remove/>
                      </CustomButton>
                  </Stack>
                  <Avatar sx={{width:80,height:80}} src={item.image}>

                  </Avatar>
                  <Box sx={{flexGrow:1}}>
                    <Typography>{item.title}</Typography>
                    <Typography variant='subtitle2' color="text.secondary">{item.price}DA x {item.Quantity}</Typography>
                    <Typography variant='subtitle1' color="error">{item.price*item.Quantity} DA</Typography>

                  </Box>
                  <IconButton onClick={()=>removeCartItems(item)}>
                    <DeleteIcon/>
                  </IconButton>
     
                </Stack>
  )
}
