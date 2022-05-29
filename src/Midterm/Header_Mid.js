import React, { Component } from 'react'
import ReactDOM from "react-dom/client";
import { Route,Routes,Link } from 'react-router-dom';
import Admin from './Admin'
import Bot from './Bot';
import { Top_content } from "./Top_content";
 export default class Header_Mid extends Component {
   render() {
     return (
       <div class="container-fluid">
         <div class="row"></div>
         <nav class="navbar navbar-expand-lg navbar-light bg-warning">
           <Link to="/"> Home</Link>

           <div class="navbar" id="">
             <ul class="navbar-nav ">
               <li class="nav-item active">
                 <a class="nav-link" href="#">
                   THẾ GIỚI <span class="sr-only">(current)</span>
                 </a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">
                   TÀI CHÍNH - KINH DOANH
                 </a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">
                   ĐỜI SỐNG
                 </a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">
                   VĂN HÓA
                 </a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">
                   GIẢI TRÍ
                 </a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">
                   GIỚI TRẺ
                 </a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">
                   GIÁO DỤC
                 </a>
               </li>{" "}
               <li class="nav-item">
                 <a class="nav-link" href="#">
                   THỂ THAO
                 </a>
               </li>{" "}
               <li class="nav-item">
                 <a class="nav-link" href="#">
                   SỨC KHỎE
                 </a>
               </li>{" "}
               <li class="nav-item">
                 <a class="nav-link" href="#">
                   DU LỊCH
                 </a>
               </li>{" "}
               <li class="nav-item">
                 <a class="nav-link" href="#">
                   CÔNG NGHỆ
                 </a>
               </li>
               <ul>
                 <li>
                   <Link to="/admin"> Admin</Link>
                 </li>
               </ul>
             </ul>
           </div>
         </nav>
         <Routes>
           <Route path="/admin" element={<Admin></Admin>}></Route>
           <Route
             path="/"
             element={
               <>
                 <Top_content></Top_content>
                 <Bot></Bot>
               </>
             }
           ></Route>
         </Routes>
       </div>
     );
     
   }
 }
 