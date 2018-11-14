import React, { Component } from 'react';
import BlogList from './BlogList';

class BlogContainer extends Component {
  render() {
    return (
      <div className="blog__wrap">
        <BlogList />
      </div>
    );
  }
}

export default BlogContainer;