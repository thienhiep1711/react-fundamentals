import React, { Component } from 'react';
import './PopupContainer.scss'

class PopupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }

    this.closePopup = this.closePopup.bind(this)
  }

  closePopup() {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    return (
      <div className="popup__container">
      {
        this.state.isOpen && <div className="popup__wrap">
        <div className="popup__title">
              <div className="popup__title__content">
                Title 
              </div>
              <div className="popup__title__close"  onClick={this.closePopup}>x</div>
          </div>
          <div className="popup__content">Content Popup</div>
          <div className="popup__control">
            <button className="btn btn-sm btn-primary">Xác nhận</button>
            <button className="btn btn-sm btn-default">Đóng</button>
          </div>
        </div>
      }
      {
        this.state.isOpen && <div className="popup__overlay" onClick={this.closePopup}></div>
      }
      </div>
    );
  }
}

export default PopupContainer;