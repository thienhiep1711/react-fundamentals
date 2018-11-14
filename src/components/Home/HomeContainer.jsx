import React, { Component } from 'react';
import ContentTitle from '../Common/ContentTitle';
import HomeContent from '../Home/HomeContent';
import banner from '../../assets/images/front-end-banner.jpg';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <div className="about__image">
            <img src={banner} alt="" className="img-responsive"/>
          </div>
          <div className="about__wrap">
      <div className="about__content">
        <ContentTitle contentTitle="Xin tự giới thiệu về tôi..."/>
        <HomeContent />
        </div>
    </div>
      </div>
    
    );
  }
}

export default HomeContainer;