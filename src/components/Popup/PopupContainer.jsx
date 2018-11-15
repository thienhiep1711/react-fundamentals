import React, { Component } from 'react';
import './PopupContainer.scss'

class PopupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.showPopup,
      data: []
    }

    this.closePopup = this.closePopup.bind(this)
  }
  

  componentWillReceiveProps(nextProps) {
    this.setState({
      isOpen: nextProps,
      data: nextProps.popupData,
    })
  }

  closePopup() {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    return (
      <div>
      {
        this.state.isOpen &&  <div className="popup__container">
        <div className="popup__wrap">
          {this.props.content}
          <div className="popup__title__close" onClick={this.closePopup}>x</div>
        </div>
          <div className="popup__overlay" onClick={this.closePopup}></div>
        </div>
      }
      </div>
    );
  }
}

export default PopupContainer;