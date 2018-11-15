import React, { Component } from 'react';
import AuthorQuizContainer from '../components/AuthorQuiz/AuthorQuizContainer';
import PageTitle from '../components/Layout/PageTitle';
import {shuffle, sample} from 'underscore';

import authors from '../service/authourApi';

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
      'correct': '#23d6ff',
      'wrong': '#e6454d',
    }
    return mapping[highlight]
  }

  onAnswerSelected(answer) {
    const isCorrect = this.state.turnData.author.books.some((book) => book === answer);
    this.setState({
      highlight: isCorrect ? 'correct' : 'wrong',
    })
  }

  render() {
    return (
      <div className="container-fluid">
         <div className="mainWrap">
            <PageTitle titlePage="AuthorQuiz Page"/>
            <div className="mainWrap__content">
                <div className="container">
                  <AuthorQuizContainer {...this.state} selected={this.onAnswerSelected} highlight={this.highlightToBgColor(this.state.highlight)}  />
                </div>
            </div>
         </div>
      </div>
    );
  }
}

export default AuthorQuiz;
