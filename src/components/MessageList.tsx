import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';
import generateMessage, { Message } from '../Api';
import ClearButton from './ClearButton';
import PlayButton from './PlayButton';
import SnackbarMessage from './Snackbar';
import styled from 'styled-components'

const Header = styled.section`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const MessageList: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    if (!paused) {
      const cleanUp = generateMessage((message: Message) => {
        setMessages(oldMessages => [...oldMessages, message]);
      });
      return cleanUp;
    }
  }, [setMessages, paused]);
 
  const errorMessages = useMemo(
    () =>
      (messages || []).filter((msg) => msg.priority === 0),
    [messages]
  );

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

  const handleRemove = (id: number) => {
    const msgs = messages;
    if (msgs.length > 0) {
      setMessages(msgs.filter((msg) => msg.id !== id));
    }
  };

  const clear = () => {
    setMessages([])
  }

  const toggleBtn = () => {
    setPaused(!paused)
  }

  return (
    <>
      <Header>
        <ClearButton clear={clear} />
        <PlayButton toggleBtn={toggleBtn} paused={paused} />
      </Header>
      <section className="container">
        <div className="row">
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item active bg-light text-muted fw-bold" aria-current="true"><span className="px-5">Error Type 1 </span><span className="px-4">Count: {errorMessages.length}</span></li>
              {errorMessages?.sort((a, b) => a > b ? 1:-1).map?.((msg) => <li key={msg?.message} className="error-list list-group-item d-flex justify-content-between align-items-center">
                {msg?.message} <button type="button" onClick={() => handleRemove(msg?.id)} className="error-list border-0 fw-bold">Clear</button>
              </li>
              )}
            </ul>
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item active bg-light text-muted fw-bold" aria-current="true"><span className="px-5">Warning Type 2 </span><span className="px-4">Count: {warningMessages.length}</span></li>
              {warningMessages?.sort((a, b) => a > b ? 1:-1).map?.(msg => <li key={msg?.message} className="warn-list list-group-item d-flex justify-content-between align-items-center">
                {msg?.message} <button type="button" onClick={() => handleRemove(msg?.id)} className="warn-list border-0 fw-bold">Clear</button>
              </li>
              )}
            </ul>
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item active bg-light text-muted fw-bold" aria-current="true"><span className="px-5">Info Type 3 </span><span className="px-4">Count: {infoMessages.length}</span></li>
              {infoMessages?.sort((a, b) => a > b ? 1:-1).map?.(msg => <li key={msg?.message} className="info-list list-group-item d-flex justify-content-between align-items-center">
                {msg?.message} <button type="button" onClick={() => handleRemove(msg?.id)} className="info-list border-0 fw-bold">Clear</button>
              </li>
              )}
            </ul>
          </div>
        </div>
        {
         <SnackbarMessage message={errorMessages.map(({message}) => message )} />
        }
      </section> 
    </>
  );
}

export default MessageList;
