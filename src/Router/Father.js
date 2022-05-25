import React, { Component } from 'react'
import{BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'

export default class Father extends Component {
  render() {
    return (
      <Router>
        <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav className="navbar navbar-expand-1g navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'}className="nav-link">Home</Link></li>
                    <li><Link to={'/contact'}className="nav-link">Contact</Link></li>
                    <li><Link to={'/about'}className="nav-link">About</Link></li>
                </ul>
            </nav>
            <hr/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/contact' element={<About/>}/>
                <Route path='/about' element={<Contact/>}/>
            </Routes>
        </div>
      </Router>
    )
  }
}
