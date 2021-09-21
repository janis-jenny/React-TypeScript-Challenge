import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';
import generateMessage, { Message } from './Api';

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages(oldMessages => [...oldMessages, message]);
    });
    return cleanUp;
  }, [setMessages]);

   // console.log(messages)
  
  const errorMessages = useMemo(
    () =>
      (messages || []).filter((msg) => msg.priority === 0),
    [messages]
  );

  console.log(errorMessages);
  return (
    <div>

      <ul className="list-group list-msg">
        <li className="list-group-item active bg-light text-muted fw-bold" aria-current="true">Error Type 1</li>
      {errorMessages?.map?.(msg =>
        <li key={msg?.message} className="list-group-item d-flex justify-content-between align-items-center bg-danger">
          {msg?.message}
        </li>
      )}
      </ul>
    </div> 
  );
}

export default App;
