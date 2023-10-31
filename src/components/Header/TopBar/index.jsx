import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react'
import { Email, FacebookOutlined, LinkedIn, Twitter } from '@mui/icons-material';
import LangComponent from './LangComponent';
import { useStateContext } from '../../../contexts/AppContextProvider';


export default function index() {

  return (
      <Box sx={{bgcolor:"#2B3445", color:"#fff" ,display:{xs:"none",md:"block"}}}>
        <Container>
            <Stack direction={"row"} spacing={1} >
                <Stack direction="row" alignItems={"center"} spacing={.4}>
                    <WhatsAppIcon/>
                    <Typography>
                        +213798633757
                    </Typography>

                </Stack>
                <Stack sx={{flexGrow:1}}direction="row" alignItems={"center"} spacing={.4}>
                    <Email/>
                    <Typography>
                        youcef.fet@gmail.com
                    </Typography>

                </Stack>
           

                <IconButton color="inherit">
                    <FacebookOutlined/>
                </IconButton>
                <IconButton color="inherit">
                    <Twitter/>
                </IconButton>
                <IconButton color="inherit">
                    <LinkedIn/>
                </IconButton>
                <LangComponent/>
            </Stack>
         </Container>
    </Box>
  )
}
