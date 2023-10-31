import React, { useState } from 'react'
import CartDrawer from './CartDrawer';
import CartBage from './CartBage';


const products=[
  { id:1,
    title:"Introducing New Winter Collection",
    image:"https://bazaar.ui-lib.com/assets/images/products/chair-with-clothes.png",
    price:2250,
    quantity:1,
    total:function (){return this.price*this.quantity}
  },
  {
    id:2,
    title:"Classic Rolex Watch",
    image:"https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=640&q=75",
    price:2000,
    quantity:1,
    total:function (){return this.price*this.quantity}

  },
  {
    id:4,
    title:"Fresh Strawberry",
    image:"https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=640&q=75",
    price:650,
    quantity:1,
    total:function (){return this.price*this.quantity}

  }
]

export default function index() {

    const [state, setState] =useState(false)
    const toggleDrawer = (open)=> {
        setState(open);
    };

    const [items,setItems]=useState(products);
  return (
    <>      
            <CartBage   content={items.length}{...{toggleDrawer}}/>
            <CartDrawer {...{state,toggleDrawer,items,setItems}}/>
    </>


  )
}
