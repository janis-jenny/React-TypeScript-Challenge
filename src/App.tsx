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
      <ul>
      {errorMessages?.map?.(msg =>
        <li key={msg?.message}>
          {msg?.message}
        </li>
      )}
      </ul>
    </div>

  );
}

export default App;
