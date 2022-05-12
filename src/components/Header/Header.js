import React, { Component } from "react";
import './Header.css'
class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <ul className="nav_link">
            <li>Home</li>
            <li>Buy</li>
            <li>Contact</li>
            <li>Getting</li>
            <li>Back</li>
          </ul>
        </header>
      </div>
    );
  }
}
export default Header;
