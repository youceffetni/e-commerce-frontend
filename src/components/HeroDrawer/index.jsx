import {Stack, Box, Drawer, IconButton, Typography, useMediaQuery, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { AutoStories, Chair, Email, ExpandMore, FacebookOutlined, LinkedIn, Monitor, Twitter } from '@mui/icons-material';
import LangComponent from '../Header/TopBar/LangComponent';


export default function index() {

    const [state,setState]=useState(false);
    const toggleDrawer=(state)=>{
        setState(state);
    }
    const options = [
      
      { title:"Book",
      icon :<AutoStories/>
    
      },{ title:"Electronics",
      icon :<Monitor/>
    
      },{ title:"Furnitures",
      icon :<Chair/>
    
      }
    ];
  return (
    <>

      {useMediaQuery('(max-width:900px)') && 

      (<IconButton  onClick={()=>toggleDrawer(true)} >
                <MenuIcon sx={{fontSize:"24px",}} />
          </IconButton>)
      }
        
       <Drawer
            anchor="top"
            open={state}
            onClose={()=>toggleDrawer(false)}
          
        >
         <Stack alignItems={"center"} sx={{ position : "relative",gap:"10px",padding:" 35px 15px 15px"}} >
            <IconButton sx={{position:"absolute",transform:"translateY(-15px)",top:15,right:15}} color="inherit" onClick={()=>toggleDrawer(false)}>
                            <CloseIcon />
            </IconButton>
            <Stack flexWrap ="wrap" direction={"row"} alignItems={"center"} spacing={1} >
                <Stack direction="row" alignItems={"center"} spacing={.4}>
                        <WhatsAppIcon/>
                        <Typography>
                            +213798633757
                        </Typography>

                </Stack>
                <Stack direction="row" alignItems={"center"} spacing={.4}>
                        <Email/>
                        <Typography>
                            youcef.fet@gmail.com
                        </Typography>

                </Stack>

            </Stack>
            <Stack direction={"row"} >
              <IconButton color="inherit">
                  <FacebookOutlined/>
              </IconButton>
              <IconButton color="inherit">
                  <Twitter/>
              </IconButton>
              <IconButton color="inherit">
                  <LinkedIn/>
              </IconButton>
            </Stack>
            <LangComponent/>

            <Accordion sx={{width:"100%"}} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMore/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Categories</Typography>
              </AccordionSummary>
              <AccordionDetails>
              {options.map((option, index) => (
                    
                <Stack sx={{mb:"8px"}} key={index} direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography variant="h6">
                        {option.icon}
                
                    </Typography>
                    <Typography variant="h6">
                        {option.title}
                    </Typography>
                </Stack>
                  
                ))}
              </AccordionDetails>
            </Accordion>
         </Stack>
        </Drawer>
    </>
  )
}
