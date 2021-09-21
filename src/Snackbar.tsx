import React, { useState } from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@mui/material/Alert/Alert';

const SnackbarMessage: React.FC<{}> = ({message}) => {
  const [open, setOpen] = useState(true);

  const handleClose = (reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
    </div>
  )
}

export default SnackbarMessage;