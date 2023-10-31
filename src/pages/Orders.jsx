import React, { useEffect } from 'react'

export default function Orders() {
    useEffect(() => {
        document.title = 'My Orders';
      }, []);
  return (
    <div>Orders</div>
  )
}
