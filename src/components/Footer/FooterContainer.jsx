import React, { Component } from 'react';
import FooterMenu from './FooterMenu';
import FooterSocial from './FooterSocial';

class FooterContainer extends Component {
  render() {
    return (
      <div className="footer__wrap">
          <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <FooterMenu />
                </div>
                <div className="col-md-6">
                  <FooterSocial />
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default FooterContainer;