import { Avatar, IconButton } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';


export default function ({handleClickOpen}) {

  return (
    <IconButton onClick={handleClickOpen}>
        <Avatar sx={{
            width:{md:45,xs:32},
            height:{md:45,xs:32},
            border:"1px solid #ddd",
            bgcolor:"background.default",
            }}>
            <PersonIcon sx={{color:"text.primary"}}/>
        </Avatar>
    </IconButton>

  )
}
