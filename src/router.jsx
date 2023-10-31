import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

const router =createBrowserRouter([

    {
        path:"/",
        element:<Root/>,
        children:[
            {
                
                index:true,
                element:<HomePage/>
            },{
                path:"cart",
                element:<Cart/>
            },{
                path:"orders",
                element:<Orders/>
            }
        ]
    },
    {
        path:"*",
        element:<h1>404 error - Page not found</h1>
    }

]);



export default router;