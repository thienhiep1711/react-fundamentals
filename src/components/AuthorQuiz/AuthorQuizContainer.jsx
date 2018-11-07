import React from 'react';
import Hero from './Hero';  
import Turn from './Turn';
import Continue from './Continue';

const AuthorQuizContainer = ({turnData}) =>  {
    return (
      <div className="author__wrap">
        <div className="author__main">
          <div className="row">
            <div className="col-sm-6">
              <Hero author={turnData.author} />
            </div>
            <div className="col-sm-6">
              <Turn />
            </div>
          </div>
        </div>
        <Continue />
      </div>
    );
}

export default AuthorQuizContainer;