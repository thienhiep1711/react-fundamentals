import React from 'react';

const Turn  = ({books, selected}) =>  {
    return (
      <div className="author__turn">
        {
          books && books.map((title, i) =>  (
              <div className="alert alert-dark" onClick={selected} role="alert" key={`index_${i}`}>
                {title}
              </div>
            )
          )
        }
      </div>
    );
  }
export default Turn;
