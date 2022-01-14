import React, { createContext, useState } from "react";
import { Route } from "react-router-dom";
import "./BlackFriday.css";
import ProductContainer from "./ProductContainer";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Cart from "./Cart";
import Nav from "./Nav";
import Shipment from "./Shipment";
export let CartContext = createContext();
export default function BlackFriday() {
  const [cart, setCart] = useState([]);
  function setHandler(obj, status) {
    // obj = { name, price, offer, image };
    if (status === 1) {
      setCart([...cart, obj]);
    } else if (status === -1) {
      let afterRemove = cart.filter((product) => product.name !== obj.name);
      setCart(afterRemove);
    } else {
      setCart([]);
    }
  }
  return (
    <CartContext.Provider value={{ cart, setHandler }}>
      <div className="BlackFriday">
        <Route path="/BlackFriday/" exact={true}>
          <Nav location="home"></Nav>
          <div id="home">
            <div className="home-bg"></div>
            <div className="deadline container">
              <div className="row">
                <div className="col-sm-4">
                  <h1> Our deadline</h1>
                </div>
                <div className="col-sm-4">
                  <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-calendar-calendar-and-date-justicon-lineal-color-justicon-2.png" alt="calander" />
                </div>
                <div className="col-sm-4">
                  <h1> 06 july 2021</h1>
                </div>
              </div>
            </div>
            <div className="container bf-offer">
              <div className="row">
                <div className="col-sm-4">
                  <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-gift-black-friday-justicon-lineal-color-justicon-2.png" alt="Get your Free Mystery Box" />
                  <p className="black-p"> Get your Free Mystery Box</p>
                </div>
                <div className="col-sm-4">
                  <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-delivery-black-friday-justicon-lineal-color-justicon.png" alt="Enjoy free shipping" />
                  <p className="black-p"> Enjoy free shipping world wide !</p>
                </div>
                <div className="col-sm-4">
                  <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-shopping-bag-black-friday-justicon-lineal-color-justicon.png" alt="Sale upto 50% on everything!!" />
                  <p className="black-p"> Sale upto 50% on everything!!</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row" id="offer">
                <div className="col-sm-8">
                  <ProductContainer></ProductContainer>
                </div>
                <div className="col-sm-4">
                  <Sidebar></Sidebar>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </Route>
        <Route path="/BlackFriday/cart" exact={true}>
          <Nav location=""></Nav>
          <Cart></Cart>
        </Route>
        <Route path="/BlackFriday/shipment" exact={true}>
          <Nav location=""></Nav>
          <Shipment></Shipment>
        </Route>
      </div>
    </CartContext.Provider>
  );
}
