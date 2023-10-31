import { Box, Button, Divider, IconButton, Stack, SwipeableDrawer, Typography } from '@mui/material'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem'
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateContext } from '../../contexts/AppContextProvider';
import {  useNavigate } from 'react-router-dom';



export default function CartDrawer({state,toggleDrawer}) {
const navigate=useNavigate();

const {cartItems,removeCartItems,cartTotalAmount}=useStateContext();
const handleViewCartClick =()=>{
  toggleDrawer(false);
  navigate("/cart");

}


  return (
    <SwipeableDrawer
        anchor="right"
        open={state}
        onClose={()=>toggleDrawer(false)}
        onOpen={()=>toggleDrawer(true)}
      
    >
            <Stack direction={"row"} alignItems={"center"} spacing={.5} sx={{bgcolor:"#2B3445",color:"#fff",padding:"16px"}}>
                <LocalMallIcon/> 
                <Typography variant="h6" sx={{flexGrow:1}}>{cartItems.length} items</Typography>
                <IconButton color="inherit" onClick={()=>toggleDrawer(false)}>
                        <CloseIcon />
                </IconButton>
            </Stack>
            <Divider/>
            
            <Stack  sx={{width:350,height:"100vh",padding:"15px "}} spacing={2}>
                {cartItems.length>=1 && <Button onClick={()=>removeCartItems([])} startIcon ={ <DeleteIcon/>} variant ="outlined" color="warning">
                  Emptying Cart
                </Button>}

                <Stack spacing={1} sx={{flexGrow:"1"}} alignItems={"center"}>


                  {cartItems.length < 1 && <SentimentVeryDissatisfiedIcon color="error" sx={{fontSize:"80px"}}/>}
                  {cartItems.length < 1 && <Typography variant="h5" sx={{transition:"2s"}}>The Cart is Empty</Typography>}


                  {cartItems.length > 0 && cartItems.map((item,index)=>(<CartItem item={item}  key={index}/>))}
                  
             
             

                </Stack>

                {cartItems.length>=1 &&
                <>
                  <Button onClick={handleViewCartClick} variant="contained">
                    Order Now ({cartTotalAmount()} DA)
                  </Button>
                  
                </>
                }

            </Stack>

    </SwipeableDrawer>
  )
}
