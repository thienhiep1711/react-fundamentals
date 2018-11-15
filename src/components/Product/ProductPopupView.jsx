import React from 'react';

const ProductPopupView = ({popupData}) => {
    return (
      <div className="popup__wrap__content">
          <div className="popup__title">
                <div className="popup__title__content">
                  {popupData[0].name}
                </div>
            </div>
            <div className="popup__content">
                <div className="product__popup">
                    <div className="product__popup__gallery">
                      <img src={popupData[0].image} alt=""/>
                    </div>
                    <div className="product__popup__detail">
                        <h3>{popupData[0].name}</h3>
                        <p className="description">{popupData[0].description}</p>
                        <div className="text " dangerouslySetInnerHTML={{__html: popupData[0].content}}>
                        </div>
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