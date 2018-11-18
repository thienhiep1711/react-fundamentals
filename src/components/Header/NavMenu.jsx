import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class NavMenu extends Component {
  render() {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink  to="/home" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/about" className="nav-link">About</NavLink>
        </li>
         <li className="nav-item">
          <NavLink  to="/game" className="nav-link">Game</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/blog" className="nav-link">Blogs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/product" className="nav-link">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/table" className="nav-link">Table</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
    );
  }
}
export default NavMenu;
