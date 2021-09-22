import React from 'react';

const PlayButton: React.FC<{toggleBtn: () => void, paused: boolean}> = ({toggleBtn, paused}) => {
  return (
    <button onClick={toggleBtn}>{paused? "Play" : "Stop"}</button>
  )
}

export default PlayButton;