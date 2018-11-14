import React, { Component } from 'react';

import { BrowserRouter as Router,Route, Link } from 'react-router-dom';

import NavBar from '../components/Header/NavBar';
import FooterContainer from '../components/Footer/FooterContainer';
import AuthorQuiz from './AuthorQuiz';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import Blog from './Blog';
class PageBase extends Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar />
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About}  />
            <Route path="/author-quiz" component={AuthorQuiz} />
            <Route path="/product" component={Product}  />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <FooterContainer />
          </div>
        </Router>
    );
  }
}

export default PageBase;