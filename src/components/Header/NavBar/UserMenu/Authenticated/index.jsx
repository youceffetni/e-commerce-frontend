import  { useEffect, useState } from 'react'

import { Avatar, Box, Button,  IconButton,  Menu, Stack, useMediaQuery, Typography } from '@mui/material';
import { AlignVerticalBottom, ExpandMore } from '@mui/icons-material';
import BoxUser from './BoxUser';
import axiosClinet from '../../../../../axios-client';
import { useStateContext } from '../../../../../contexts/AppContextProvider';
import { useTheme } from '@emotion/react';

export default function () {
      const theme=useTheme();
      /* Open USER Menu  */
      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
          setAnchorEl(null);
      };
    /************ */
    const {setUser,user}=useStateContext();
    useEffect(()=>{
        axiosClinet.get("/user").then(({data})=>{setUser(data)})
    },[])
    return(  
        <>
          
            <IconButton
               
                onClick={handleClick}
                sx={{

                    [theme.breakpoints.up("md")]:{
                        border:"1px solid #ddd",

                        bgcolor:"background.default",
                        textTransform:"capitalize",
                        color:"text.primary",
                        borderRadius:18
                    }
                }}
               
                >
                 <Avatar sx={{height:{md:45,xs:34},width:{md:45,xs:34},border:`1px solid ${theme.palette.border}`}}/>
                 
                {useMediaQuery('(min-width:900px)') && <>&nbsp; <Typography variant="body1" >{user.name}</Typography><ExpandMore/>    </>}
            
            
            </IconButton>
            <Menu sx={{"& .MuiList-root ":{p:0}}} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                <BoxUser {...{handleClose,user}}/>
            </Menu>
         </>
      )
}
