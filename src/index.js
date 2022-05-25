import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Main/App';
import Header from './components/Header/Header';
import reportWebVitals from './reportWebVitals';
import Form from './Form/Form';
import Xeploai from './Form/Xeploai';
import Menu from './Form/Menu';
import Demo from './Lifecycle_react/Demo';
import Crud from './CRUD/Crud';
import Father from './Router/Father';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Crud/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
