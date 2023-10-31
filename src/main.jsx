import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from "./router"
import "./index.css"
import AppContextProvider from './contexts/AppContextProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
 
         <RouterProvider router={router}/>
    </AppContextProvider>
  </React.StrictMode>,
)
