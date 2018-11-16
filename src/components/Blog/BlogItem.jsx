import React from 'react';
import { BrowserRouter as Router,Route, Link, Redirect  }  from 'react-router-dom';

const BlogItem = ({item, selected}) => {
    return (
      <div className="blog__item">
        <div className="blog__item__img" style={{backgroundImage: `url(${item.image})`}}>
        </div>
        <div className="blog__item__detail">
            <Link to={`/blog/${item.id}`} className="blog__item__title" onClick={() => selected(item.id)}>{item.name} - <i>{item.author}</i></Link>
            <div className="blog__item__time">
              {item.date} - {item.lengthTime}
            </div>
            <div className="blog__item__description">
            <p>{item.description}</p>
            </div>
            <div className="blog__item__read">
              <a href="#">Read more</a>
            </div>
        </div>
      </div>
    );
}

export default BlogItem;
