import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link, Switch  }  from 'react-router-dom';
import PageTitle from '../components/Layout/PageTitle';
import BlogContainer from '../components/Blog/BlogContainer';
import BlogDetail from '../components/Blog/BlogDetail';
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
                <Switch>
                  <Route exact path="/blog">
                    <BlogContainer
                      news={this.state.news}
                    />
                  </Route>
                  <Route path="/blog/:id">
                      <BlogDetail />
                  </Route>
                </Switch>
              </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Blog;
