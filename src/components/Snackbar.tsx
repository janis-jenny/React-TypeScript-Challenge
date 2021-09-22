import React, { useEffect, useState } from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@mui/material/Alert/Alert';

interface IProps {
  message: string[];
}

const SnackbarMessage: React.FC<IProps> = (props) => {
  const { message } = props;
  const [open, setOpen] = useState(true);
  
  useEffect(() => {
    setOpen(true)
  }, [message.join()])

  const handleClose = (reason: string): ((event: React.SyntheticEvent<never, Event>) => void) | undefined => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={() => handleClose("click") }>
      <Alert onClose={() => handleClose("click")} severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarMessage;
