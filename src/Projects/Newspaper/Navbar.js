import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/Newspaper/">
              <img src="https://img.icons8.com/doodle/40/000000/news.png" alt="logo" style={{ filter: "grayscale(100%)" }} /> Khoborer Kagoj
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/Newspaper/" onClick={() => this.props.setNews("Apple")}>
                    <img src="https://img.icons8.com/ios-filled/34/000000/mac-os.png" alt="Apple" />
                    Apple
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Newspaper/" onClick={() => this.props.setNews("Technologies")}>
                    <img src="https://img.icons8.com/external-becris-solid-becris/34/000000/external-technology-literary-genres-becris-solid-becris.png" alt="Tech" />
                    Technologies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Newspaper/" onClick={() => this.props.setNews("Tesla")}>
                    <img src="https://img.icons8.com/windows/34/000000/tesla-logo.png" alt="Tesla" />
                    Tesla
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Newspaper/" onClick={() => this.props.setNews("Business")}>
                    <img src="https://img.icons8.com/external-prettycons-solid-prettycons/34/000000/external-world-travel-prettycons-solid-prettycons-1.png" alt="Business" />
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Newspaper/about">
                    <img src="https://img.icons8.com/ios-filled/34/000000/high-importance.png" alt="About" />
                    About us
                  </Link>
                </li>
              </ul>
              <Link to="/">
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/50/000000/external-exit-emergency-vitaliy-gorbachev-fill-vitaly-gorbachev.png" alt="exit"/>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
