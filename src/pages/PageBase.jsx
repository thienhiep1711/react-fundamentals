import React, { Component } from 'react';

import { BrowserRouter as Router,Route, Link } from 'react-router-dom';

import NavBar from '../components/Header/NavBar';
import AuthorQuiz from './AuthorQuiz';
import Home from './Home';
import About from './About';
class PageBase extends Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/author-quiz" component={AuthorQuiz} />
          </div>
        </Router>
    );
  }
}

export default PageBase;