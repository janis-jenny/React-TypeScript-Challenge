import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const PlayButton: React.FC<{toggleBtn: () => void, paused: boolean}> = ({toggleBtn, paused}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={toggleBtn} className="mx-1">{paused? "Play" : "Stop"}</Button>
    </Stack>
  )
}

export default PlayButton;