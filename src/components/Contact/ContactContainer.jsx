import React, { Component } from 'react';
import ContactContent from './ContactContent';
import ContactForm from './ContactForm';

class ContactContainer extends Component {
  render() {
    return (
      <div className="contact__wrap">
        <div className="row">
          <div className="col-md-6">
          <ContactContent/>
          </div>
          <div className="col-md-6">
          <ContactForm />
          </div>
        </div>
    </div>
    );
  }
}

export default ContactContainer;