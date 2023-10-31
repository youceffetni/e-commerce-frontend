import { Badge, Box, IconButton, Paper, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import  { useState } from 'react'
import List from '@mui/material/List';
import TabContext from '@mui/lab/TabContext';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'

import NotificationItem from './NotificationItem';


  
export default function BoxNotifications({handleClose}) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const LabelTab=({children,number=null})=>{

    return (
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <Typography>{children}</Typography>
        {number && <Typography color="#fff" sx={{bgcolor:"error.main",borderRadius:"100%",width:"20px"}}>
          {number}
        </Typography>}
      </Stack>


    )
  }
  
  return (
   <Box sx={{width:"340px"}}>
    <Stack direction={"row"} alignItems={"center"}  sx={{bgcolor:"#2B3445",color:"#fff",p:"12px"}}>
        <Typography variant="h6" color="inherit" sx={{flexGrow:1}}>Notifications</Typography>
       
        <IconButton  color="inherit" onClick={handleClose}><CloseIcon /></IconButton>
    </Stack>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Paper sx={{ borderBottom: 1, borderColor: 'divider' }} elevation={3}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={<LabelTab number={2}>Orders</LabelTab>} value="1" />
            <Tab label={<LabelTab>Deliveries</LabelTab>} value="2" />
            <Tab label={<LabelTab>Archives</LabelTab>} value="3" />
          </TabList>
        </Paper>
        <TabPanel value="1" sx={{padding:"0"}}>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <NotificationItem active={true}/>
              <NotificationItem active={true}/>
              
          </List>
          
        </TabPanel>
        <TabPanel value="2" sx={{padding:"0"}}>
          <Stack sx={{minHeight:"100px"}} justifyContent={"center"} alignItems={"center"} >
            No Delivrey Notfication
          </Stack>
        </TabPanel>
        <TabPanel value="3" sx={{padding:"0"}}>
          <NotificationItem/>
          <NotificationItem/>
        </TabPanel>
      </TabContext>
    </Box>


   </Box>
  )
}
