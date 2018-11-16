import React from 'react';
import ContentTitle from "../Common/ContentTitle";
import HtmlRaw from '../Common/HtmlRaw';
import Gallery from '../Common/Gallery';

const BlogDetailContent = ({content}) =>  {
    const data = content[0];
    return (
      <div className="about__content">
        <ContentTitle contentTitle={data.name}/>
        <div className="blog__detail__info">
          <div className="blog__detail__author">{data.author}</div>
          <div className="blog__detail__time">{data.lengthTime} - {data.date}</div>
        </div>
        <div className="blog__detail__description">{data.description}</div>
          {
            data.gallery ? ( <Gallery gallery={data.gallery} />) : (<span>Loadding</span>)
          }
        <div className="blog__detail__content">
          <HtmlRaw htmlRaw={data.content}/>
        </div>
      </div>
    );
}

export default BlogDetailContent;