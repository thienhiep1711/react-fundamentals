import React, { Component } from 'react';
import PageTitle from '../components/Layout/PageTitle';
import ContactContainer from '../components/Contact/ContactContainer';

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="mainWrap">
          <PageTitle titlePage="Contact Page"/>
          <div className="mainWrap__content">
              <div className="container">
                <ContactContainer />
              </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Contact;