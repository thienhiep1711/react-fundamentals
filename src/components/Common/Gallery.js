import React from 'react';

const Gallery = ({gallery}) => {
    return (
      <div className="gallery__list">
          {
            gallery && gallery.map((item, index) => (
              <div className="gallery__item" key={`item__${index}`}>
                  <img src={item} alt=""/>
              </div>
            ))
          }
      </div>
    );
}

export default Gallery;