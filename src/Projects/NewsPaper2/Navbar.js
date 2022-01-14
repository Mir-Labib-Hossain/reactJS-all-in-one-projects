import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  flag = [
    { name: "Argentina", code: "AR", icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-argentina-countrys-flags-justicon-lineal-color-justicon.png" },
    { name: "Belgium", code: "BE", icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-belgium-countrys-flags-justicon-lineal-color-justicon.png" },
    { name: "Brazil", code: "BR", icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-brazil-flag-countrys-flags-justicon-lineal-color-justicon.png" },
    { name: "Canada", code: "CA", icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-canada-countrys-flags-justicon-lineal-color-justicon.png" },
    { name: "India", code: "IN", icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-india-flag-countrys-flags-justicon-lineal-color-justicon.png" },
    { name: "Italy", code: "IT", icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-italy-countrys-flags-justicon-lineal-color-justicon.png" },
    { name: "Japan", code: "JP", icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-japan-flag-countrys-flags-justicon-lineal-color-justicon.png" },
    { name: "Korea", code: "KR", icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-south-korea-countrys-flags-justicon-lineal-color-justicon.png" },
    { name: "Malaysia", code: "MY", icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-malaysia-countrys-flags-justicon-lineal-color-justicon.png" },
    { name: "Russia", code: "RU", icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-russia-countrys-flags-justicon-lineal-color-justicon.png" },
    { name: "Turkey", code: "TR", icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-turkey-countrys-flags-justicon-lineal-color-justicon.png" },
    { name: "USA", code: "US", icon: "https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-united-states-countrys-flags-justicon-lineal-color-justicon.png" },
  ];

  render() {
    
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
          <div className="container-fluid">
            <Link className={`navbar-brand ${this.props.currentCategory === "Home" ? "active" : ""}`} to="/Newspaper2.0" onClick={() => this.props.setCurrentCategory("Home")}>
              <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/000000/external-newspaper-news-flatart-icons-lineal-color-flatarticons-1.png" alt="News paper logo"/>
              Khoborer Kagoj 2.0
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {this.props.News.map((news) => {
                  return (
                    <li className="nav-item" key={news.category}>
                      <Link className={`nav-link ${news.category === this.props.currentCategory ? "active" : ""}`} to={`/Newspaper2.0/${news.category}`} alt={news.category}>
                        <img src={news.icon} alt={news.category} />
                        {news.category}
                      </Link>
                    </li>
                  );
                })}
                <li className="nav-item dropdown ">
                  <div className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" id="navbarDropdown" role="button">
                    <img src={this.props.lang.icon} alt={this.props.code} />
                    {this.props.lang.code}
                  </div>
                  <div className="dropdown-menu dropdown-menu-lg-end my-2">
                    {this.flag.map((item) => {
                      return (
                        <button key={item.code} className={this.props.lang.code === item.code ? "active-flag" : ""} onClick={() => this.props.setLang(item.code, item.icon)} data-bs-toggle="tooltip" data-bs-placement="bottom" title={item.name}>
                          <img src={item.icon} alt={item.name} />
                          {item.code}
                        </button>
                      );
                    })}
                  </div>
                </li>
              </ul>
              <Link to="/">
                <img src="https://img.icons8.com/ios/24/000000/exit.png" alt="exit" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
