import { Avatar, Badge, IconButton } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useTheme } from '@emotion/react';
import { useStateContext } from '../../contexts/AppContextProvider';


function CartBage({toggleDrawer}) {
  const theme=useTheme();
  const {cartItems}=useStateContext();

  return (
  

<IconButton onClick={_=>toggleDrawer(true)}>
    <Avatar 
            sx={{
                overflow:"visible",
                cursor:"pointer",
                bgcolor:"background.default",
                border:`1px solid ${theme.palette.border}`,
                width:{md:45,xs:34},
                height:{md:45,xs:34}
              }}
    
    >

      <Badge badgeContent={cartItems.length} color="error" >
         <LocalMallIcon sx={{fontSize:{md:"34px",xs:"24px"},color:"text.primary"}} />
      </Badge>

    </Avatar>
</IconButton>
    

  )
}

export default CartBage