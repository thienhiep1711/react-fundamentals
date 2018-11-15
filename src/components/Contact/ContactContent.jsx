import React, { Component } from 'react';

class ContactContent extends Component {
  render() {
    return (
      <div className="contact__info">
        <h2 className="contact__info__title">Nguyen Thien Hiep</h2>
        <div className="contact__info__detail">
          <ul>
            <li className="position">Front End Devevloper</li>
            <li><strong>Email:</strong><span>thienhiep171193@gmail.com</span></li>
            <li><strong>Phone:</strong><span>0915280986</span></li>
            <li><strong>Địa chỉ:</strong><span>Bắc Từ Liêm - Hà Nội</span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactContent;