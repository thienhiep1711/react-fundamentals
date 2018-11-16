import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link, Switch, Redirect  }  from 'react-router-dom';
import PageTitle from '../components/Layout/PageTitle';
import BlogContainer from '../components/Blog/BlogContainer';
import BlogDetail from '../components/Blog/BlogDetail';
import news from '../service/newsApi';
import details from '../service/newsDetailApi';
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: news,
      selected:[],
    }

    this.showDetail = this.showDetail.bind(this);
  }

  showDetail(id) {
    console.log(id);
    let matches = details.filter(p => p.id.toLowerCase().includes(id));
      this.setState({
        selected: matches,
      })
  }

  render() {
    const selected = this.state.selected;
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
                      selected={this.showDetail}
                    />
                  </Route>
                  <Route path="/blog/:id">
                      {
                        selected.length > 0 ? ( <BlogDetail details={this.state.selected} />) : ( <Route render={() => <Redirect to="/blog" />} />)
                      }
                     
                  </Route>
                  <Route path="/blog/:id">
                      <BlogDetail details={this.state.selected} />
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
