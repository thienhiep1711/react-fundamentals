import React, { Component } from 'react';
import ContentTitle from '../Common/ContentTitle';
import AboutContent from './AboutContent';
import banner from '../../assets/images/front-end-banner.jpg';

class AboutContainer extends Component {
  render() {
    return (
      <div className="about__wrap">
        <div className="about__content">
          <ContentTitle contentTitle="5 Best Practices về cấu trúc khi làm việc với React"/>
          <AboutContent />
          </div>
      </div>
    );
  }
}

export default AboutContainer;