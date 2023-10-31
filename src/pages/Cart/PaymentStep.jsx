import { Alert, Typography } from '@mui/material'
import React from 'react'

export default function PaymentStep() {
  return (
    <div>

        <Typography variant="h6" sx={{textAlign:"center"}}>Phase of payment</Typography>
        <br/>
     
        <Alert severity='info' >
             
            The electronic payment is not  available Now, so you must pay upon receiving your order package
        </Alert>
    </div>
  )
}
