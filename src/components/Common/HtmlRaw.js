import React from 'react';

const  HtmlRaw = ({htmlRaw}) =>  {
    return (
      <div className="text " dangerouslySetInnerHTML={{__html: htmlRaw}}></div>
    );
}

export default HtmlRaw;