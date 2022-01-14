import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { name, author, title, description, url, urlToImage, publishedAt } = this.props;
    return (
      <div>
        <div className="card border-effect" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {name}
          </span>
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="card-info">
              <p> - {!author?"Unknown":author}</p>
              <span>{new Date(publishedAt).toGMTString()}</span>
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
