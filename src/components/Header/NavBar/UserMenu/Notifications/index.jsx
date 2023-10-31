import { Box, Menu } from '@mui/material'
import  BadgeNotif from './BadgeNotif'
import BoxNotifications from "./BoxNotifications"
import React from 'react'

export default function index() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <Box onClick={handleClick}>
      <BadgeNotif />
    </Box>
    

    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      sx={{"& .MuiList-root ":{p:0}}}
    >
        <BoxNotifications handleClose={handleClose}/>
    </Menu>
  </div>
   
  )
}
