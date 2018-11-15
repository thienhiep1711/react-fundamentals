import React from 'react';
import BlogList from './BlogList';

const BlogContainer = ({news}) => {
    return (
      <div className="blog__wrap">
        <BlogList news={news} />
      </div>
    );
}

export default BlogContainer;
