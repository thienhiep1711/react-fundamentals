import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class FooterMenu extends Component {
  render() {
    return (
      <ul className="footer__menu">
        <li>
          <NavLink  to="/home" >Home</NavLink>
        </li>
        <li>
          <NavLink  to="/about" >About</NavLink>
        </li>
         <li>
          <NavLink  to="/author-quiz"  >AuthorQuiz</NavLink>
        </li>
        <li>
          <NavLink  to="/blog"  >Blogs</NavLink>
        </li>
        <li>
          <NavLink  to="/product" >Product</NavLink>
        </li>
        <li>
          <NavLink  to="/contact"  >Contact</NavLink>
        </li>
      </ul>
    );
  }
}

export default FooterMenu;