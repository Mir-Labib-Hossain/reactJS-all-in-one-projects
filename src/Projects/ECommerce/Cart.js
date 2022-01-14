import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./BlackFriday";
import CartProduct from "./CartProduct";
import Footer from "./Footer";

export default function Cart() {
  const { cart, setHandler } = useContext(CartContext);
  const totalPrice = cart.reduce((totalPrice, product) => totalPrice + product.price, 0);
  return (
    <div className="cart">
      <div className="red-div"></div>
      <div className="container">
        <h1>Cart</h1>
        {cart.length === 0 ? (
          <div className="if-empty-cart">
            <hr />
            <h1>Go and add items to your cart</h1>
            <Link to="/BlackFriday">
              <button type="button" className="btn btn-outline-danger order-btn">
                <i class="fas fa-shopping-cart"></i> Go now
              </button>
            </Link>
          </div>
        ) : (
          <div className="row">
            <div className="col-sm-9">
              <div className="cart-items">
                {cart.map((cartItem, i) => {
                  return <CartProduct name={cartItem.name} price={cartItem.price} offer={cartItem.offer} image={cartItem.image} key={i}></CartProduct>;
                })}
              </div>
            </div>
            <div className="col-sm-3">
              <h3>Total : $ {totalPrice}</h3>
              <h6>Price : ${totalPrice}</h6>
              <h6>
                Shipping : $ <del>50</del>
              </h6>
              <h6>item : {cart.length}</h6>
              {cart.length !== 0 ? (
                <Link to="/BlackFriday/shipment">
                  <button type="button" className="btn btn-outline-danger order-btn" onClick={() => setHandler(null, 0)}>
                    Place order
                  </button>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
        <div data-aos="fade-down" data-aos-duration="500" data-aos-offset="-500">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
