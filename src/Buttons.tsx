import React from 'react';

const ClearButton: React.FC<{clear: () => void }> = ({clear}) => {
  return (
    <button onClick={clear}>Clear</button>
  )
}

export default ClearButton;