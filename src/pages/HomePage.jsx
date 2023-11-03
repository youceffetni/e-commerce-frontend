import React, { useEffect } from 'react'
import Products from "../components/Products"
export default function HomePage() {
  useEffect(() => {
    document.title = 'DZ SHOPPING';
  }, []);
  return (
    <>
    <Products/>
    </>
  )
}
