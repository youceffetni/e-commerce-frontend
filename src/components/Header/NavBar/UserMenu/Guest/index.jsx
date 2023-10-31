
import LoginIcon from './LoginIcon';
import LoginDialog from './LoginDialog';
import { useState } from 'react';



export default function index() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return(<>
  
          
              <LoginIcon {...{handleClickOpen}}/>
              <LoginDialog {...{handleClose,open} }/>
          
  </>)
}
