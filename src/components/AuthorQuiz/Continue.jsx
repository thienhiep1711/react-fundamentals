import React from 'react';

const Continue = ({selected}) =>  {
    return (
      <div className="author__control">
        <button className="btn btn-lg btn-primary" onClick={selected}>Continue</button>
      </div>
    );
}

export default Continue;
