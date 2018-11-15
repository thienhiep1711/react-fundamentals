import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className="contact__form">
        <h2 className="contact__info__title">Yêu cầu liên hệ</h2>
        <form action="#">
          <div class="form-group">
              <input type="text" class="form-control" id="iptName" placeholder="Họ và tên" />
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="iptEmail" placeholder="Email" />
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="iptPhone" placeholder="Số điện thoại" />
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="iptCompany" placeholder="Công ty" />
          </div>
          <div class="form-group">
              <button type="submit" class="btn btn-primary">Gửi yêu cầu</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;