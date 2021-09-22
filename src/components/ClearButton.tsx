import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ClearButton: React.FC<{clear: () => void}> = ({clear}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={clear} className="mx-1">Clear</Button>
    </Stack>
  )
}

export default ClearButton;
