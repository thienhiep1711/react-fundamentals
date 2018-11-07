import React, { Component } from 'react';
import NavMenu from './NavMenu';
import NavSearch from './NavSearch';

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <NavMenu />
          <NavSearch />
        </div>
      </nav>
    );
  }
}

export default NavBar;