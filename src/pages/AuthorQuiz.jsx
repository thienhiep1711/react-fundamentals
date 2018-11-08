import React, { Component } from 'react';
import AuthorQuizContainer from '../components/AuthorQuiz/AuthorQuizContainer';
import {shuffle, sample} from 'underscore';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'https://2.pik.vn/201857ee2267-bb3a-4b48-af03-5d5cb87e7aa0.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'https://2.pik.vn/20181579a2aa-2cb4-44e0-bd95-bc7444efa5b6.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'https://2.pik.vn/20185b7a6ba6-ea6e-45d7-b1ca-55d2ca4e6d33.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'https://2.pik.vn/2018960ce46e-93ab-4a46-b093-c22ca1db7eb8.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'https://2.pik.vn/20180d9d7f1c-de59-4500-95ba-0e3a1b687610.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'https://2.pik.vn/20187e40f5fc-bf85-4927-99a8-ae2f64adbbcd.png',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];





class AuthorQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turnData: this.getTurnData(authors),
      highlight: '',
     };

     this.onAnswerSelected = this.onAnswerSelected.bind(this);
  }

  getTurnData(authors) {
    const allBooks = authors.reduce(function (p, c, i) {
      return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);
    return {
      books: fourRandomBooks,
      author: authors.find((author) => author.books.some((title) => title === answer))
    }
  }

  highlightToBgColor(highlight) {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red',
    }
    return mapping[highlight]
  }

  onAnswerSelected(answer) {
    const isCorrect = this.state.turnData.author.books.some((book) => book === answer);
    console.log(isCorrect)
    this.setState({
      highlight: isCorrect ? 'correct' : 'wrong'
    })
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
                  <AuthorQuizContainer {...this.state} selected={this.onAnswerSelected} />
                </div>
            </div>
         </div>
      </div>
    );
  }
}

export default AuthorQuiz;
