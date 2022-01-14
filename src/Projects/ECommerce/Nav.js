import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./BlackFriday";
export default function Nav(props) {
  const { cart, setHandler } = useContext(CartContext);
  return (
    <div id="home">
      <ul className="nav justify-content-center">
        <li className="nav-item" data-aos="fade-down">
          <Link className="nav-link" aria-current="page" to="/BlackFriday">
            Home
          </Link>
        </li>
        {props.location === "home" ? (
          <>
            <li className="nav-item" data-aos="fade-down" data-aos-duration="500">
              <a className="nav-link" aria-current="page" href="#offer">
                Offer
              </a>
            </li>
            <li className="nav-item" data-aos="fade-down" data-aos-duration="1000">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </>
        ) : (
          ""
        )}
        <li className="nav-item" data-aos="fade-down" data-aos-duration="1500">
          <Link className="nav-link" to="/BlackFriday/cart">
            <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/30/000000/external-shopping-basket-black-friday-justicon-lineal-color-justicon.png" alt="cart icon" />
            {cart.length}
          </Link>
        </li>
      </ul>
    </div>
  );
}
