import React, { Component } from 'react';
import AuthorQuiz from './AuthorQuiz';
import NavBar from '../components/Header/NavBar';
class PageBase extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AuthorQuiz />
      </div>
    );
  }
}

export default PageBase;