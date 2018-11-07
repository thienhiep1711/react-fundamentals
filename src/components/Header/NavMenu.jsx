import React, { Component } from 'react';

class NavMenu extends Component {
  render() {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">AthourQuiz</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>
      </ul>
    );
  }
}

export default NavMenu;