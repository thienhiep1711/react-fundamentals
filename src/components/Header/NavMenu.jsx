import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class NavMenu extends Component {
  render() {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink  to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/about" className="nav-link">About</NavLink>
        </li>
         <li className="nav-item">
          <NavLink  to="/author-quiz" className="nav-link">AuthorQuiz</NavLink>
        </li>
      </ul>
    );
  }
}

export default NavMenu;