import React, { Component } from 'react';
import PageTitle from '../components/Layout/PageTitle';
import AboutContainer from '../components/About/AboutContainer';

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="mainWrap">
          <PageTitle titlePage="About Page"/>
          <div className="mainWrap__content">
              <div className="container">
                <AboutContainer />
              </div>
          </div>
        </div>
    </div>
    );
  }
}

export default About;