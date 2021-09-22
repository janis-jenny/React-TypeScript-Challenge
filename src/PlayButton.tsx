import React from 'react';

const PlayButton: React.FC<{togglePause: () => void, paused: boolean }> = ({togglePause, paused}) => {
  return (
    <button onClick={togglePause}>{paused? "Play" : "Stop"}</button>
  )
}

export default PlayButton;