import { createContext, useState } from "react";


export const OrderContext=createContext({
    
});




export default function OrderContextProvider({children}) {

    const [order,setOrder]=useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        wilaya:"",
        company:"",
        place:""

    });
    return (
            <OrderContext.Provider value={{order,setOrder}}>
                {children}
            </OrderContext.Provider>
        )
}