import React, { Component } from 'react';
import NavMenu from './NavMenu';
import NavSearch from './NavSearch';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Thiên Hiệp Pages</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavMenu />
          <NavSearch />
        </div>
      </nav>
    );
  }
}

export default NavBar;