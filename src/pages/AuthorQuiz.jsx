import React, { Component } from 'react';
import AuthorQuizContainer from '../components/AuthorQuiz/AuthorQuizContainer';


class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
         <div className="mainWrap">
            <div className="mainWrap__title">
                <div className="container">
                  <h1>Authour Quizz</h1>
                </div>
            </div>
            <div className="mainWrap__content">
                <div className="container">
                  <AuthorQuizContainer />
                </div>
            </div>
         </div>
      </div>
    );
  }
}

export default AuthorQuiz;