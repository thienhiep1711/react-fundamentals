import React, { Component } from 'react';

class NavMenu extends Component {
  render() {
    return (
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">AthourQuiz</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Product</a>
        </li>
      </ul>
    );
  }
}

export default NavMenu;