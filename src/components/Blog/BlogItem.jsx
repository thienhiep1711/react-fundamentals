import React from 'react';

const BlogItem = ({item}) => {
    return (
      <div className="blog__item">
        <div className="blog__item__img" style={{backgroundImage: `url(${item.imageUrl})`}}>
        </div>
        <div className="blog__item__detail">
            <h2 className="blog__item__title">{item.name} - <i>{item.author}</i></h2>
            <div className="blog__item__time">
              {item.date} - {item.lengthTime}
            </div>
            <div className="blog__item__description">
            <p>{item.imageSource}</p>
            </div>
            <div className="blog__item__read">
              <a href="#">Read more</a>
            </div>
        </div>
      </div>
    );
}

export default BlogItem;
