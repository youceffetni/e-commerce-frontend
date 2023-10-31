import { createContext, useContext, useState } from "react";
import CustomThemeProvider from '../theme'
import CartContextProvider ,{cartContext}   from "./CartContext"
import OrderContextProvider, { OrderContext } from "./OrderContext";

const stateContext= createContext({})



export default function AppContextProvider({children}) {
    const [token,setToken]=useState(localStorage.getItem("ACCESS_TOKEN"));
    const [user,setUser]=useState({});
    const _setToken=(token)=>{
      setToken(token);
      localStorage.setItem("ACCESS_TOKEN",token);
    }

    const [mode,setMode]=useState(localStorage.getItem("THEME_MODE")? localStorage.getItem("THEME_MODE"): "light");

   
    
    const values={
      token,
      _setToken,
      mode,
      setMode,
      user,
      setUser,
    
    }
  return (
    <stateContext.Provider value={values}>
        <CartContextProvider>
          <OrderContextProvider>
              <CustomThemeProvider>
                      {children}
              </CustomThemeProvider>
          </OrderContextProvider>
        </CartContextProvider>
    </stateContext.Provider>
  )

  }  
export const useStateContext=()=>({...useContext(stateContext),...useContext(cartContext),...useContext(OrderContext)})
