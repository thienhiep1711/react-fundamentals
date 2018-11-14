import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    return (
      <div className="product__list">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
      </div>
    );
  }
}

export default ProductList;