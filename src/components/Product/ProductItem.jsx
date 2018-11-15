import React from 'react';
import img from '../../assets/images/product/react.png';

const ProductItem = ({item, showDetail, addToCard}) => {
    return (
      <div className="product__item">
          <div className="product__preview">
              <div className="product__preview__img">
                <img src={item.imageUrl} alt={item.imageSource} className="img-responsive"/>
              </div>
              <div className="product__preview__detail">
                  <span className="product__preview__button" onClick={() => showDetail(item.id)}>View</span>
                  {/* <span className="product__preview__button" onClick={() => addToCard(item.id)}>Add Cart</span> */}
              </div>
          </div>
          <div className="product__item__detail">
            <h2 className="product__item__title">
                {item.name}
            </h2>
            <div className="product__item__description">
                {`Experience ${item.exp} years`}
            </div>
          </div>
      </div>
    );
}

export default ProductItem;