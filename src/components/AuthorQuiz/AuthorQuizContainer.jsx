import React from 'react';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';

const AuthorQuizContainer = ({turnData, selected, highlight}) =>  {
    return (
      <div className="author__wrap">
        <div className="author__main">
          <div className="row">
            <div className="col-sm-4">
              <Hero author={turnData.author} highlight={highlight}/>
            </div>
            <div className="col-sm-8">
              <h3 className="author__title">Choose book?</h3>
              <Turn books={turnData.books} selected={selected} highlight={highlight}/>
            </div>
          </div>
        </div>
        <Continue  />
      </div>
    );
}

export default AuthorQuizContainer;
