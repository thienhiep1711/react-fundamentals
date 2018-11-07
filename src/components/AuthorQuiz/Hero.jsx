import React from 'react';

const Hero = ({author}) => {
    return (
      <div className="author__hero">
        <img src={author.imageUrl} alt={author.imageSource} className="author__hero__image" />
      </div>
    );
}

export default Hero;