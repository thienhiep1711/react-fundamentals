import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({products, showDetail, addToCard}) => {
    return (
      <div className="product__list">
        {
          products.length > 0 && products.map((product) => (
            <ProductItem item={product} key={product.id} showDetail={showDetail} addToCard={addToCard}/>
          ))
        }
      </div>
    );
}

export default ProductList;