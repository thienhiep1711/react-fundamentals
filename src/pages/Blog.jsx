import React, { Component } from 'react';
import PageTitle from '../components/Layout/PageTitle';
import BlogContainer from '../components/Blog/BlogContainer';
class Blog extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="mainWrap">
          <PageTitle titlePage="Blogs"/>
          <div className="mainWrap__content">
              <div className="container">
                <BlogContainer />
              </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Blog;