import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({products}) => {
    return (
      <div className="product__list">
        {
          products.length > 0 && products.map((product) => (
            <ProductItem item={product} key={product.id} />
          ))
        }
      </div>
    );
}

export default ProductList;