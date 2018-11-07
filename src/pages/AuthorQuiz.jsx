import React, { Component } from 'react';
import AuthorQuizContainer from '../components/AuthorQuiz/AuthorQuizContainer';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'https://imgur.com/2ebO6jN',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'https://imgur.com/UvUk88T',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'https://imgur.com/TlseF32',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'https://imgur.com/QSyEk3L',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'https://imgur.com/9QO9XSW',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'https://imgur.com/PLmNOPI',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];


class AuthorQuiz extends Component {
  state = {
    turnData: {
      author: authors[0],
      books: authors[0].books
    }
  }
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
                  <AuthorQuizContainer {...this.state} />
                </div>
            </div>
         </div>
      </div>
    );
  }
}

export default AuthorQuiz;