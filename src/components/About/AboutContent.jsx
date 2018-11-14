import React, { Component } from 'react';

class AboutContent extends Component {
  render() {
    return (
      <div className="about__content">
        <strong>Mở đầu</strong>
        <p>Có lẽ ta không cần phải nghi ngờ gì nữa về việc React đã tạo ra môt cuộc cách mạng trong cách mà chúng ta xây dựng các giao diện cho người dùng. Giờ đây chúng thật dễ để học và tạo điều kiện tuyệt vời cho phép ta tạo ra những component có khả năng sử dụng lại được ở nhiều chỗ, giúp cho trang web của bạn có một giao diện đồng nhất.</p>
        <p>Tuy nhiên, vì React chỉ đảm nhiệm các công việc ở tầng view trong của một ứng dụng, nên React không bắt buộc ta phải tuân theo một kiến trúc cụ thể nào (như MVC hay MVVM). Điều này có thể sẽ khiến cho ta gặp khó trong việc giữ cho code được tổ chức, sắp xếp một cách hợp lý khi Project React ngày càng lớn.</p>
        <p>Tại công ty của tác giả bài viết 9elements, nơi chính tác giả là CEO, sản phẩm hàng đậu của họ là PhotoEditorSDK - một ứng dụng React quy mô lớn. Tác giả cùng với team đã chọn ra và cung cấp cho chúng ta một số Best practices mà họ đúc kết được trong việc tổ chức một ứng dụng React quy mô lớn.</p>
        <strong>1. Cấu trúc thư mục dự án</strong>
        <p>Thông thường thì code cho việc tạo style và code cho các component được tách riêng biệt ra các thư mục khác nhau. Tất cả các style được viết vào một file CSS dùng chung chia sẻ trong Project. Component được tách rời khỏi file chứa style của nó. Ở ví dụ dưới đây component FilterSlider được để ở thư mục component, style của nó được viết vào file photo-editor-sdk.scss và được đặt trong thư mục styles</p>
        <p>Sau rất nhiều lần refactor, một kinh nghiệm đã được rút ra rằng phương pháp tiếp cận trên sẽ không tốt khi dự án ngày càng được mở rộng. Trong tương lai, các component của ta sẽ cần phải được chia sẻ giữa các module trong dự án, hay giữa các dự án liên quan đến nhau. Vì vậy mà đội ngũ của tác giả đã chuyển sang sử dụng cách tổ chức thư mục lấy component làm trung tâm.</p>
        <p>Ý tưởng ở đây là tất cả những đoạn code, style thuộc về một component (Ví dụ: JavaScript, CSS, assets, tests...) đều được đặt trong một trong folder. Điều này sẽ giúp chúng ta dễ dàng tách code ra để gói thành một npm module hoặc, trong trường hợp đang vội hay cần gấp, có thể chia sẻ folder này cho các dự án khác một cách đơn giản.</p>
        <strong>Import các component</strong>
        <p>Một nhược điểm của cách tổ chức thư mục trên đó là khi phải import một component nào đó, ta buộc phải import đầy đủ đường dẫn sao cho hợp lệ, như sau:</p>
        <p>Nhưng thật không may rằng, khi phải debug các React Component trên trình duyệt Chrome và khi các lỗi xảy ra, Debugger sẽ show ra cho bạn hàng loạt các file cùng tên index.js và đó là một lý do khiến ta không nên lựa chọn phương pháp.</p>
        <p>Một giải pháp khác đó là sử dụng directory-named-webpack-plugin. Plugin này tạo ra một quy luật nhỏ cho webpack resolver, giúp webpack có thể tìm thấy một file JavaScript hoặc JSX có tên trùng với tên thư mục mà nó đang được import. Nhưng nhược điẻm của phương pháp này đó là thư mục vendor sẽ bị gắn liền với webpack. Đó là một vấn đề với những người sử dụng Rollup để bundle các library. Và việc update lên các phiên bản webpack gần đây luôn là điều không dễ dàng chút nào.</p>
        <strong>2. CSS trong Javascript</strong>
        <p>Tạo style và đặc biệt là tạo theme vẫn luôn là một trong những vấn đề khó mà ta phải đối mặt. Như đã để cập ở trên, thông thường ta hay sử dụng một file CSS (SCSS) đồ sộ chứa tất cả các class css. Và để tránh việc trùng lặp tên, ta thường sử dụng các prefix toàn cục và tuân theo BEM convention để đặt tên class. Khi ứng dụng ngày càng phát triển, phương pháp này có vẻ sẽ không phù hợp lắm và cần được thay thế. Sử dụng CSS modules là một trong những ý tưởng nhưng nó có thể gây ra một vài vấn đề về hiệu năng. Phương pháp tách CSS thông qua việc sử dụng Extract Text plugin của webpack cũng tạo ra một sự phụ thuộc nặng nề vào webpack khiến cho việc test sau này rất khó khăn.</p>
      </div>
    );
  }
}

export default AboutContent;