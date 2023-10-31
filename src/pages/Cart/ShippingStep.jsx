import React, { useRef, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Alert, AlertTitle, Box, Button, InputLabel, Link, MenuItem, Select, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { useStateContext } from '../../contexts/AppContextProvider';


export default function ShippingStep() {
    const { token, user ,order,setOrder} = useStateContext();
    
    const handleInputChange=(e,field)=>{
        
       const value =e.target.value;
       
        if(field==="place"){
            setOrder((prev)=>({ ...prev,[field]:e.target.value,shippingRate:value==1 ? 800:450 }));
        }
    }

 

return (
    <div>
            <Typography variant="h6" sx={{ textAlign: "center" }}>Shipping informations</Typography>
            <br />
            {!token && <Alert severity='info'>
                To complete the order must <Link color="error">Login</Link> or
                fill the form below
            </Alert>}
            {token && <Alert severity='info'>
                <AlertTitle>Hello,<strong>{user.name}</strong> </AlertTitle>
                we will use your personal informations (Name,Address and Phone number) for shipping.<br />
                Therefore, I ask you to consider them before completing <Link color="error">here</Link>.
            </Alert>}
            <br />


        <Box component="form" >
            {/*User Information */}
            {!token && <>
                <Typography variant="body1">Your personal information</Typography>
                <br />
                <Grid container spacing={2}>
                    <Grid xs={12} sm={6}>
                        <TextField onChange={(e)=>handleInputChange(e,"name")}  label="Fullname"  fullWidth />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField onChange={(e)=>handleInputChange(e,"email")} type="email" label="Email"  fullWidth />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField onChange={(e)=>handleInputChange(e,"phone")} type="number" label="Phone number"  fullWidth />
                    </Grid>

                    <Grid xs={12} sm={6}>
                        <Select

                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            fullWidth
                            onChange={(e)=>handleInputChange(e,"wilaya")}
                            value={order.wilaya}
                        >

                            <MenuItem value={""}>Wilaya</MenuItem>
                            <MenuItem value={12}>Tebessa</MenuItem>
                            <MenuItem value={16}>Alger</MenuItem>
                            <MenuItem value={23}>Annaba</MenuItem>
                            <MenuItem value={31}>Oran</MenuItem>
                        </Select>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField label="Your full Address" onChange={(e)=>handleInputChange(e,"address")} fullWidth />
                    </Grid>
                </Grid>
                <br />
                </>
            }

            {/*Shipping information */}
           
                <Typography variant="body1" >Shipping information</Typography>
                <br />
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <Alert severity='info' variant='outlined'>
                            Home delivery price :800DA.<br />
                            Stop desk delivery price : 450DA.
                        </Alert>
                    </Grid>
                    <Grid xs={12} sm={6}>

                        <Select

                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            fullWidth
                            onChange={(e)=>handleInputChange(e,"company")}
                            value={order.company}
                            
                            
                        >

                            <MenuItem value={""}>Choose a delivery company</MenuItem>
                            <MenuItem value={1}>Zr express</MenuItem>
                            <MenuItem value={2}>Yalidine express</MenuItem>
                            <MenuItem value={3}>Word et nord express</MenuItem>

                        </Select>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Select

                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            fullWidth
                            onChange={(e)=>handleInputChange(e,"place")}
                            value={order.place}
                        >

                            <MenuItem value={""}>Place of shipment arrival</MenuItem>
                            <MenuItem value={1}>At your addresse</MenuItem>
                            <MenuItem value={2}>Stop desk company</MenuItem>

                        </Select>
                    </Grid>

                </Grid>

                
        </Box>
    </div>
)
}
