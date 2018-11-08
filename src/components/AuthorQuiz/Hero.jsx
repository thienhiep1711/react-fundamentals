import React from 'react';

const Hero = ({author, highlight}) => {
    return (
      <div className="author__hero">
        <div className="author__hero__image"  style={{borderColor: highlight}}>
        <img src={author.imageUrl} alt={author.imageSource}  />
        </div>
        <div className="author__hero__name">
          <strong>{author.name}</strong>
        </div>
      </div>
    );
}

export default Hero;