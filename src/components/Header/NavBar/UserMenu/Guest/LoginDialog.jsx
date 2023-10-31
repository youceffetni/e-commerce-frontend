import { Alert, Box, Link, Dialog, Stack, Typography } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import axiosClient from "../../../../../axios-client"
import { useRef, useState } from 'react';
import { useStateContext } from '../../../../../contexts/AppContextProvider';
import { LoginOutlined } from '@mui/icons-material';

import LoadingButton from '@mui/lab/LoadingButton';


export default function LoginDialog({open,handleClose}) {
    

    const [errors,setErrors]=useState(null);
    const [loading,setLoading]=useState(false);

    const emailRef=useRef();
    const passwordRef=useRef();
    
    const {_setToken}=useStateContext();
    const handleLogin = ()=>{


        setLoading(true);

        axiosClient.post("/login",{
            email:emailRef.current.value,
            password:passwordRef.current.value,
  
  
        }).then(({data})=>{
            console.log(data)
            _setToken(data.token);
            setLoading(false)
        }).catch((error)=>{
            setLoading(false)
            console.log(error)
            const {response}=error;
            if(response &&response.status===422){
               setErrors(response.data.errors);
            }
  
            throw error;
  
        })
    }
  return (
    <Dialog open={open} onClose={handleClose} sx={{ "& .MuiPaper-root ":{ maxWidth:"500px",textAlign:"center",padding:"15px"}}}>
        <Stack spacing={4}>
            <Stack alignItems={"center"} >
                <StorefrontIcon  sx={{fontSize:"70px"}}/>
                <Typography variant="h5">DZ-SHOPPING</Typography>
            </Stack>
            <Typography variant='h6'>Login into your account</Typography>
            {errors &&
                    Object.keys(errors).map(
                        (item)=>(<Alert  variant ="filled" severity="error" key="index"> {errors[item]}</Alert>)

                    )
                } 

                  
               
            <Box>
                <input ref={emailRef} className="input-login-signup" placeholder="Email"/>
                
                <input ref={passwordRef} className="input-login-signup" type="password" placeholder="Password"/>
                <br/>

                
                
       
                  <LoadingButton
                    loading={loading}
                    onClick={handleLogin} 
                    loadingPosition="end"
                    endIcon={<LoginOutlined/>}
                    variant="contained" 
                    color="success" 
                    sx={{width:"100%"}}
                  >
                    Login
                  </LoadingButton>
            
            
            
      
               

            </Box>
            <Typography>Not Registered?<Link href="#" color="error" underline="none">Create an Account</Link></Typography>
        </Stack>
 
    </Dialog>
  )
}
