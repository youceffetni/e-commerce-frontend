import {  Box, Stack } from "@mui/material"
import Header from "../components/Header"

import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"



function Root() {
  
  return (

    <Stack justifyContent="space-between" sx={{bgcolor:"background.default",minHeight:"100vh",color:"text.primary"}}>
        
         <Header/>
          <Outlet/>
         <Footer/>
      
    </Stack>
  )
}

export default Root