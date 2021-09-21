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
  const warningMessages = useMemo(
    () =>
      (messages || []).filter((msg) => msg.priority === 1),
    [messages]
  );

  const infoMessages = useMemo(
    () =>
      (messages || []).filter((msg) => msg.priority === 2),
    [messages]
  );

  return (
    <section className="container">
    <div className="row">
      <div className="col">
        <ul className="list-group">
          <li className="list-group-item active bg-light text-muted fw-bold" aria-current="true">Error Type 1 <span>Count: {errorMessages.length}</span></li>
          {errorMessages?.map?.(msg => <li key={msg?.message} className="list-group-item d-flex justify-content-between align-items-center bg-danger">
            {msg?.message}
          </li>
          )}
        </ul>
      </div>
      <div className="col">
        <ul className="list-group">
          <li className="list-group-item active bg-light text-muted fw-bold" aria-current="true">Warning Type 2 <span>Count: {warningMessages.length}</span></li>
          {warningMessages?.map?.(msg => <li key={msg?.message} className="list-group-item d-flex justify-content-between align-items-center bg-warning">
            {msg?.message}
          </li>
          )}
        </ul>
      </div>
      <div className="col">
        <ul className="list-group">
          <li className="list-group-item active bg-light text-muted fw-bold" aria-current="true">Info Type 3 <span>Count: {infoMessages.length}</span></li>
          {infoMessages?.map?.(msg => <li key={msg?.message} className="list-group-item d-flex justify-content-between align-items-center bg-success">
            {msg?.message}
          </li>
          )}
        </ul>
      </div>
    </div>
    </section> 
  );
}

export default App;
