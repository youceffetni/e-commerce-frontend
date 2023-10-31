import { createContext, useState } from "react";


export const cartContext=createContext({
    
});


export default function CartContextProvider({children}) {
    const products=[
        { id:1,
          title:"Winter Collection",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut illo maiores aspernatur sint ",
          image:"https://bazaar.ui-lib.com/assets/images/products/chair-with-clothes.png",
          price:2250,
          Quantity:0,
          
  
       
        },
        {
          id:2,
          title:"Classic Rolex Watch",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut illo maiores aspernatur sint ",
          image:"https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=640&q=75",
          price:2000,
          Quantity:0,
          
        
      
        },
        {
          id:4,
          title:"Fresh Strawberry",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut illo maiores aspernatur sint ",
          image:"https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=640&q=75",
          price:650,
          Quantity:0,
          
      
      
        },{
          id:5,
          title:"Puma Black",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut illo maiores aspernatur sint ",
          image:"https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FShoes%2F3.PumaBlack.png&w=384&q=75",
          price:6500,
          Quantity:0,
         
      
      
        },{
          id:6,
          title:"Fresh Strawberry",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut illo maiores aspernatur sint ",
          image:"https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=640&q=75",
          price:650,
          Quantity:0,
          
      
      
        }
      ]
      const [cartItems,setCartItems]=useState(localStorage.getItem("CART_ITEMS")==null  ? []: (JSON.parse(localStorage.getItem("CART_ITEMS"))));
  
      const _setCartItems=(newItem)=>{
  
          setCartItems((prev)=>{
            
           if(!prev.find((item)=>item.id==newItem.id)){
             localStorage.setItem("CART_ITEMS",JSON.stringify([...prev,newItem]));
             return [...prev,newItem]
           }
  
           else{
             const newCartItems =prev.map((i)=>{
  
              if(i.id===newItem.id && newItem.Quantity>=1)
                return newItem;
              else
                return i;
  
             })
             localStorage.setItem("CART_ITEMS",JSON.stringify(newCartItems));
             return newCartItems;
           }
            
       
          });
  
        }
      const removeCartItems=(item)=>{
  
          let  newItems=[];
          if(!Array.isArray(item)){
            newItems=cartItems.filter((i)=>i.id !=item.id);
          }
          
        
          setCartItems(newItems);
          localStorage.setItem("CART_ITEMS",JSON.stringify(newItems));
      }
  
      const handleQuantity=(e,item)=>{
        const newItem={
          ...item,
          Quantity:e=="+" ? item.Quantity+1 : item.Quantity-1
        }
    
        // Updating objects  inside array Items
    
          _setCartItems(newItem);
       }
     
      const cartTotalAmount=()=>{
        if(cartItems!=0)
         return cartItems.map((item)=>item.price*item.Quantity).reduce((acc,curr)=>acc+curr)
        return 0;
    }
  
      const cartQuantityItems =()=>{
        if(cartItems!=0)
            return cartItems.map((item)=>item.Quantity).reduce((acc,curr)=>acc+curr);
        return 0
        
      }
      const values={products,_setCartItems,cartItems,cartQuantityItems,cartTotalAmount,handleQuantity,removeCartItems}
  return (
    <cartContext.Provider value={values}>
        {children}
    </cartContext.Provider>
  )
}
