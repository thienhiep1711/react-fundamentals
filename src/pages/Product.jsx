import React, { Component } from 'react';
import PageTitle from '../components/Layout/PageTitle';
import ProductContainer from '../components/Product/ProductContainer';
import products from '../service/productsApi';
import details from '../service/productDetailApi';
import PopupContainer from '../components/Popup/PopupContainer';
import ProductPopupView from '../components/Product/ProductPopupView';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      isOpenPopup: false,
      selected: [],
     };

    this.showDetailProduct = this.showDetailProduct.bind(this);
    this.addToCard = this.addToCard.bind(this);
  }

  showDetailProduct(id) {
    let matches = details.filter(p => p.id.toLowerCase().includes(id));
    this.setState({
      isOpenPopup:true,
      selected: matches,
    })
  }
  addToCard(id) {
    console.log(id)
    this.setState({
      isOpenPopup:true,
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="mainWrap">
          <PageTitle titlePage="Product Page"/>
          <div className="mainWrap__content">
              <div className="container">
                  <ProductContainer
                  {...this.state}
                  showDetail={this.showDetailProduct}
                  addToCard={this.addToCard}
                  />
              </div>
          </div>
          <PopupContainer showPopup={this.state.isOpenPopup} content={<ProductPopupView popupData={this.state.selected} />} />
        </div>
    </div>
    );
  }
}

export default Product;
