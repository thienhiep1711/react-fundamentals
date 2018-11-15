import React from 'react';
import ProductList from './ProductList';

const ProductContainer = ({products}) => {
    return (
      <div className="product__wrap">
        <ProductList products={products} />
        <div className="blog__option">
              <a href="#" className="btn btn-lg btn-primary">Load more...</a>
          </div>
    </div>
    );
}

export default ProductContainer;