import React from 'react';
import BlogList from './BlogList';

const BlogContainer = ({news, selected}) => {
    return (
      <div className="blog__wrap">
        <BlogList news={news} selected={selected} />
      </div>
    );
}

export default BlogContainer;
