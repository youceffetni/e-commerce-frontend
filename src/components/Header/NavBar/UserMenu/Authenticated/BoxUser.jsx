import { 
     Avatar,
     Box, 
     IconButton, 
     MenuItem, 
     Stack, 
     ToggleButton, 
     ToggleButtonGroup, 
     Typography } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PersonIcon from '@mui/icons-material/Person';
import PaymentsIcon from '@mui/icons-material/Payments';
import LogoutIcon from '@mui/icons-material/Logout';


import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { useStateContext } from '../../../../../contexts/AppContextProvider';
import axiosClient from "../../../../../axios-client"

export default function BoxUser({handleClose,user}) {
      /* Switch Light & dark mode */
        const  {mode,setMode}=useStateContext()
        const handleMode = (event,newMode) => {
            setMode(newMode);
            localStorage.setItem("THEME_MODE",newMode);
        };
    /****handle Logout****/
        const {_setToken}=useStateContext();
        const handleLogout=()=>{
            axiosClient.post("/logout").then(()=>{
                _setToken(null);
                localStorage.removeItem("ACCESS_TOKEN")
            })
        }

  return (
        <>
            <Box sx={{width:"300px",bgcolor:"#2B3445",color:"#fff",padding:"16px"}}>
                <Stack direction={"row"} alignItems={"center"}>
                    <Stack direction={"row"}  alignItems={"center"} spacing={1} flexGrow={1}>
                        <Avatar></Avatar>
                        <Box>
                            <Typography>{user.name}</Typography>
                            <Typography variant="body2">{user.email}</Typography>
                        </Box>
                    </Stack>
                    <IconButton  color="inherit" onClick={handleClose}><CloseIcon /></IconButton>
                </Stack>
                <ToggleButtonGroup
                        value={mode}
                        exclusive
                        onChange={handleMode}
                        sx={{
                            margin:"15px auto",
                            bgcolor:"#F5F5F5"
                            
                        }}
                        color="primary" 
                        
                        fullWidth
                >
                        <ToggleButton sx={{bgcolor:"#F5F5F5",color:"#2B3445"}} value="light" >
                            <LightModeIcon/>Light
                        </ToggleButton>
                        <ToggleButton sx={{bgcolor:"#F5F5F5",color:"#2B3445"}} value="dark">
                            <DarkModeIcon/> Dark
                        </ToggleButton>
                    
                    
                </ToggleButtonGroup>

            </Box>
    
            <MenuItem  sx={{width:"300px",py:"20px"}} >
                <PersonIcon/> Edit profile
            </MenuItem>
            <MenuItem sx={{width:"300px",py:"20px"}} >
                <ShoppingBasketIcon/> My orders
            </MenuItem>
            <MenuItem sx={{width:"300px",py:"20px"}} >
                <PaymentsIcon/> Payment settings
            </MenuItem>
            <MenuItem sx={{width:"300px",py:"20px"}} onClick={handleLogout}>
                <LogoutIcon/> Logout
            </MenuItem>
        
        </>
  )
}
