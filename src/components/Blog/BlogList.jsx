import React, { Component } from 'react';
import BlogItem from './BlogItem';

class BlogList extends Component {
  render() {
    return (
      <div className="blog__list">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <div className="blog__option">
              <a href="#" className="btn btn-lg btn-primary">Load more...</a>
          </div>
      </div>
    );
  }
}

export default BlogList;