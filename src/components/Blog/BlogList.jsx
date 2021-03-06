import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({news, selected}) => {
  return (
    <div className="blog__list">
      {
        news.length > 0 && news.map((item) => <BlogItem item={item} key={item.id} selected={selected}/>)
      }
      <div className="blog__option">
          <a href="/" className="btn btn-lg btn-primary">Load more...</a>
      </div>
    </div>
  );
}

export default BlogList;
