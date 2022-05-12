import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Main/App';
import Header from './components/Header/Header';
import reportWebVitals from './reportWebVitals';
import Form from './Form/Form';
import Form2 from './Form/Form2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Form2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
