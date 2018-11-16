import React from 'react';
import HtmlRaw from '../Common/HtmlRaw';

const ProductPopupView = ({popupData}) => {
    const data = popupData[0];
    return (
      <div className="popup__wrap__content">
          <div className="popup__title">
                <div className="popup__title__content">
                  {data.name}
                </div>
            </div>
            <div className="popup__content">
                <div className="product__popup">
                    <div className="product__popup__gallery">
                      <img src={data.image} alt=""/>
                    </div>
                    <div className="product__popup__detail">
                        <h3>{data.name}</h3>
                        <p className="description">{data.description}</p>
                        <HtmlRaw htmlRaw={data.content} />
                    </div>
                </div>

            </div>
            <div className="popup__control">
              <button className="btn btn-sm btn-primary">Đặt Hàng</button>
              <button className="btn btn-sm btn-default">Hủy</button>
            </div>
          </div>
    );
}

export default ProductPopupView;