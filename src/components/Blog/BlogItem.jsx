import React, { Component } from 'react';
import image from '../../assets/images/img-blog.jpg';

class BlogItem extends Component {
  render() {
    return (
      <div className="blog__item">
        <div className="blog__item__img">
          <img src={image} alt="" className="img-responsive"/>
        </div>
        <div className="blog__item__detail">
            <h2 className="blog__item__title">Thế nào là một Callback Function trong JavaScript</h2>
            <div className="blog__item__description">
            <p>Đến với thế giới JavaScript, ta sẽ bắt gặp đủ loại function. Chắc hẳn bạn đã nghe tới Arrow Function, còn nếu chưa biết tới thì bạn có thể tham khao theo đường link này. Bên cạnh Arrow Function, JavaScript còn một loại function mà ta thường hay gặp, đó là Callback Function.</p>
            </div>
            <div className="blog__item__read">
              <a href="#">Read more</a>
            </div>
        </div>
      </div>
    );
  }
}

export default BlogItem;