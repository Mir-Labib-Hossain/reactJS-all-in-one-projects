import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  let box = {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    cursor: "pointer",
    margin: "5px",
  };
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.bg} bg-${props.bg} mb-0`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.color}`} to="/ThemeChanger">
            Navbar
          </Link>
          <button className={`navbar-toggler border border-${props.color}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <p className={`text-${props.color}`}>|||</p>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link className={`nav-link text-${props.color}`} aria-current="page" to="/ThemeChanger">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.color}`} to="/ThemeChanger/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className={`btn border border-${props.color} text-${props.color}`} type="submit">
                Search
              </button>
            </form>
            <div className="d-flex mx-2">
              <div onClick={() => props.changeTheme("success", "white")} className="bg-success" style={box}></div>
              <div onClick={() => props.changeTheme("danger", "white")} className="bg-danger" style={box}></div>
              <div onClick={() => props.changeTheme("warning", "dark")} className="bg-warning" style={box}></div>
              <div onClick={() => props.changeTheme("dark", "white")} className="bg-dark" style={box}></div>
              <div onClick={() => props.changeTheme("light", "dark")} className="bg-light" style={box}></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
