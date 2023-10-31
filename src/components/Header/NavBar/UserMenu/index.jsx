import { Stack } from "@mui/material"
import Authenticated from "./Authenticated"
import Guest from "./Guest"
import Notifications  from "./Notifications"


export default function index({token}) {

    if(!token)

       return(<Guest/>)
  
    return (<Stack direction={"row"} alignItems={"center"}>
             <Notifications/>
             <Authenticated/>
            </Stack>)
  
}
