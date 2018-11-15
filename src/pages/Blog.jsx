import React, { Component } from 'react';
import PageTitle from '../components/Layout/PageTitle';
import BlogContainer from '../components/Blog/BlogContainer';
import news from '../service/newsApi';
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: news,
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="mainWrap">
          <PageTitle titlePage="Blogs"/>
          <div className="mainWrap__content">
              <div className="container">
                <BlogContainer
                  news={this.state.news}
                />
              </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Blog;
