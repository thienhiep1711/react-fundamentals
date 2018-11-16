import React from 'react';
import BlogDetailContent from './BlogDetailContent';

const BlogDetail = ({details}) => {
    return (
      <div className="about__wrap">
        {
          details ? ( <BlogDetailContent content={details} /> ) : (<div>Loading</div>)
        }
      </div>
    );
}

export default BlogDetail;