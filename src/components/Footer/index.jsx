import { Email, Facebook, LinkedIn, Storefront, WhatsApp, YouTube } from '@mui/icons-material'
import { Box, Container, Paper, Stack, Typography ,Link} from '@mui/material'
import React from 'react'


export default function index() {
  return (
    <Paper sx={{bgcolor:"#222A36",color:"#fff"}}>

     <Container>
        <Stack   justifyContent={"space-between"} spacing={3} sx={{padding:"40px 0 ",flexDirection:{xs:"column",md:"row"}}}>
            <Stack spacing={2}>
                 <Box> 
                  <Storefront  sx={{fontSize:"88px"}}/>
                  <Typography variant="h5">DZ-SHOPPING</Typography>
                  </Box>
                  <Typography variant="body2" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida.<br/> Sit diam duis mauris nulla cursus.
                     Erat et lectus vel ut sollicitudin elit at amet.
                  </Typography>
            </Stack>
            <Stack spacing={2} >
                <Typography variant="h5">Contact Us</Typography>
                <Stack direction="row" alignItems={"center"} spacing={.4}>
                        <WhatsApp/>
                        <Typography variant="h6">
                            +213798633757
                        </Typography>

                </Stack>
                <Stack direction="row" alignItems={"center"} spacing={.4}>
                        <Email/>
                        <Typography variant="h6">
                            youcef.fet@gmail.com
                        </Typography>

                </Stack>
                <Stack direction="row" alignItems={"center"} spacing={.4}>
                        <Facebook/>
                        <Typography variant="h6">
                            <Link href="https://www.facebook.com/profile.php?id=100044085524966" underline="none">My Facebook account</Link>
                        </Typography>

                </Stack>
                <Stack direction="row" alignItems={"center"} spacing={.4}>
                        <YouTube/>
                        <Typography variant="h6">
                            <Link href="https://www.youtube.com/channel/UCMFgLz2hTlv2B9hNBDrxgWw" underline="none">My Youtube channel </Link>
                        </Typography>

                </Stack>
                <Stack direction="row" alignItems={"center"} spacing={.4}>
                        <LinkedIn/>
                        <Typography variant="h6">
                            <Link href="https://www.linkedin.com/in/youcef-fetni-22bb301bb/" underline="none">My LinkedIn account </Link>
                        </Typography>

                </Stack>
            </Stack>
            
        </Stack>
     </Container>
    </Paper>
  )
}
