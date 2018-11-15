import React, { Component } from 'react';
import PageTitle from '../components/Layout/PageTitle';
import ProductContainer from '../components/Product/ProductContainer';
import products from '../service/productsApi';
import PopupContainer from '../components/Popup/PopupContainer';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
     };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="mainWrap">
          <PageTitle titlePage="Product Page"/>
          <div className="mainWrap__content">
              <div className="container">
                  <ProductContainer {...this.state} />
              </div>
          </div>
          <PopupContainer />
        </div>
    </div>
    );
  }
}

export default Product;