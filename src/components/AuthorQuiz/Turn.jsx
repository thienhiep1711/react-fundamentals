import React from 'react';

const Turn  = ({books, selected, highlight}) =>  {
    return (
      <div className="author__turn">
        {
          books && books.map((title, i) =>  (
              <div className="alert alert-primary" onClick={(e) => selected(title)} role="alert" key={`index_${i}`}>
                {title}
              </div>
            )
          )
        }
      </div>
    );
  }
export default Turn;
