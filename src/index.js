import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routers, Router, Link } from "react-router-dom";
import Admin from "./Midterm/Admin";
import Header_Mid from './Midterm/Header_Mid';
import Top_content from './Midterm/Top_content';
import Bot from './Midterm/Bot';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header_Mid></Header_Mid>
      {/* <Top_content />
      <Bot></Bot> */}
      {/* <Admin></Admin> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

