import React, { Component } from 'react';
import ProductList from './ProductList';

class ProductContainer extends Component {
  render() {
    return (
      <div className="product__wrap">
        <ProductList />
        <div className="blog__option">
              <a href="#" className="btn btn-lg btn-primary">Load more...</a>
          </div>
    </div>
    );
  }
}

export default ProductContainer;