import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className="contact__form">
        <h2 className="contact__info__title">Yêu cầu liên hệ</h2>
        <form action="#">
          <div className="form-group">
              <input type="text" className="form-control" id="iptName" placeholder="Họ và tên" />
          </div>
          <div className="form-group">
              <input type="text" className="form-control" id="iptEmail" placeholder="Email" />
          </div>
          <div className="form-group">
              <input type="text" className="form-control" id="iptPhone" placeholder="Số điện thoại" />
          </div>
          <div className="form-group">
              <input type="text" className="form-control" id="iptCompany" placeholder="Công ty" />
          </div>
          <div className="form-group">
              <button type="submit" className="btn btn-primary">Gửi yêu cầu</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;