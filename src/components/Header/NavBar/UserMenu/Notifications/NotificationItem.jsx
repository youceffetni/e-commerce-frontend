import * as React from 'react';
import { teal } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Badge,  Divider } from '@mui/material';
import { useTheme } from '@emotion/react';

export default function NotificationItem({active}) {
    const theme=useTheme();
    const AvatarBox = (
        <Avatar src={"https://bazaar.ui-lib.com/assets/images/products/chair-with-clothes.png"} 
            sx={{borderRadius:"100%" ,bgcolor:"#fff",width:"58px",height:"58px"}}
        />
      );

      const styleActiveLight=active ? {
        bgcolor: active ? teal['50'] : "background.papers",
        color:"#2B3445",
      }:"";
      const styleActiveDark=active ? {
        bgcolor: active ? grey['800'] : "background.paper",
       
      }:"";

    
  return (
    
      <ListItem sx={{... theme.palette.mode==="dark" ? styleActiveDark:styleActiveLight,gap:"12px"}}>
        <ListItemAvatar>
            <Badge  variant={active?"dot":""}  overlap="circular" color="error" >
                {AvatarBox}
            </Badge>
        </ListItemAvatar>
        <ListItemText primary="The order was not created successfully." secondary="Jan 9, 2023" />
        <Divider/>
      </ListItem>
 
  
  );
}