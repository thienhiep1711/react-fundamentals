import React, { Component } from 'react';
import PageTitle from '../components/Layout/PageTitle';
import HomeContainer from '../components/Home/HomeContainer';
class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="mainWrap">
          <PageTitle titlePage="Home Page"/>
          <div className="mainWrap__content">
              <div className="container">
                <HomeContainer />
              </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Home;