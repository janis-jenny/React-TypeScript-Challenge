import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './components/MessageList';
import reportWebVitals from './reportWebVitals';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <MessageList  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
