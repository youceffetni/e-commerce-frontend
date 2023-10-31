import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Badge, IconButton } from '@mui/material';
import { useTheme } from '@emotion/react';
export default function NotificationsButton() {
  const theme=useTheme();
  return (


      <IconButton>
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
            <Badge badgeContent={2} color="error">
              <NotificationsIcon sx={{fontSize:{md:"34px",xs:"24px"},color:"text.primary"}}/>
            </Badge>
          </Avatar>
       
     
      </IconButton>
  )
}
