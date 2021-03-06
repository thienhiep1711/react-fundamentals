import React, { Component } from 'react';

import { BrowserRouter as Router,Route, Switch  } from 'react-router-dom';

import NavBar from '../components/Header/NavBar';
import FooterContainer from '../components/Footer/FooterContainer';
import AuthorQuiz from './AuthorQuiz';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import Blog from './Blog';
import Table from './Table';
import NotFound from '../components/NotFound/NotFound';
class PageBase extends Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About}  />
              <Route path="/game" component={AuthorQuiz} />
              <Route path="/product" component={Product}  />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/table" component={Table} />
              <Route component={NotFound} />
            </Switch>
            <FooterContainer />
          </div>
        </Router>
    );
  }
}

export default PageBase;
