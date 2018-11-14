import React from 'react';

const PageTitle = ({titlePage}) =>  {
    return (
      <div className="mainWrap__title">
          <div className="container">
            <h1>{titlePage}</h1>
          </div>
      </div>
    );
}

export default PageTitle;