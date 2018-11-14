import React, { Component } from 'react';
import img from '../../assets/images/product/react.png';

class ProductItem extends Component {
  render() {
    return (
      <div className="product__item">
          <div className="product__preview">
              <div className="product__preview__img">
                <img src={img} alt="" className="img-responsive"/>
              </div>
              <div className="product__preview__detail">
                  <a className="product__preview__button" href="#">View</a>
                  <a className="product__preview__button" href="#">Add Cart</a>
              </div>
          </div>
          <div className="product__item__detail">
            <h2 className="product__item__title">
                VueJS Framework
            </h2>
            <div className="product__item__description">
                VueJS Framework 5 Years
            </div>
          </div>
      </div>
    );
  }
}

export default ProductItem;