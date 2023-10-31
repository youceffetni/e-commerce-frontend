import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { useStateContext } from "./contexts/AppContextProvider";




export default function CustomThemeProvider({children}){

  const {mode}=useStateContext();

  const theme = createTheme({
    palette:{
      mode:mode,
      ...(mode==="light")?{
     
          text:{
            primary:"#2B3445"
          },
          background:{
            default:"#F5F5F5"
          },
          border:"#ddd"

      }:{
        primary:{
          main:"#11519A"
        },
        background:{
          dafault:"#1B1B1B"
        },
        border:"#555"
      },
    }
  });

  

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
