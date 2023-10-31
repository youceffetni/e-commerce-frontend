import React from 'react'
import Typography from '@mui/material/Typography'

import {  Box, Container, IconButton, Paper, Stack } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useStateContext } from '../../../contexts/AppContextProvider';
import SearchComponenet from './SearchComponenet';
import UserMenu from './UserMenu';

import CartComponent from '../../CartComponent';
import HeroDrawer from "../../HeroDrawer"
export default function index() {


  const {token}=useStateContext();
  return (

      <Paper component="header" elevation ={4} sx={{py:"8px",}} square>
          <Container>
              <Stack 
                    direction={"row"} 
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    
                >
                
                 <HeroDrawer />
               
                <Stack alignItems={"center"}  >
                  <StorefrontIcon  sx={{fontSize:{xs:"40px",md:"52px"}}}/>
                  <Typography variant="body1">DZ-SHOPPING</Typography>
                </Stack>
              
          
                
          
                <Stack direction={"row"}   spacing={1} alignItems={"center"}>
                    <CartComponent/>
                    <Box>
                      <UserMenu token={token}/>
                      
                    </Box>
                </Stack>


              </Stack>

              
          </Container>
      </Paper>


  )
}
