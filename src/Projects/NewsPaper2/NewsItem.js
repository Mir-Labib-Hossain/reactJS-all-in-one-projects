import React, { Component } from "react";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);

  
export default class NewsItem extends Component {
  render() {
    let { name, author, title, description, url, urlToImage, publishedAt } = this.props;
    return (
      <div>
        <div className="card border-effect" style={{ width: "18rem" }}>
          <div className="bullet">
            <span className="badge rounded-pill bg-warning">{name}</span>
          </div>
          <img src={urlToImage ? urlToImage : "https://e3.365dm.com/21/09/768x432/skynews-breaking-news_5513713.jpg?20210915162827"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="card-info">
              <p> - {author ? author : "Unknown"}</p>
              <span>
                <ReactTimeAgo date={new Date(publishedAt).toGMTString()} locale="en-US"/>
              </span>
            </div>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-outline-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
