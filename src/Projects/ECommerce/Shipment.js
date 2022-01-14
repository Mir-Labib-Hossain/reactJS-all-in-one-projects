import React from "react";
import Footer from "./Footer";

export default function Shipment() {
  return (
    <div className="shipment">
      <div className="red-div"></div>
      <h1>Shipment</h1>

      <div className="shipment-child">
        <div>
          <h3>Payment Complete</h3>
          <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-online-payment-black-friday-justicon-lineal-color-justicon.png" alt="Payment Complete" />
          <div className="line active-line" data-aos="fade-right" data-aos-duration="500"></div>
        </div>
        <div>
          <h3>Packaging done</h3>
          <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-trolley-black-friday-justicon-lineal-color-justicon.png" alt="Packaging done" />
          <div className="line active-line" data-aos="fade-right" data-aos-duration="1500"></div>
        </div>
        <div className="notyet">
          <h3>Product is on the way</h3>
          <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-delivery-black-friday-justicon-lineal-color-justicon.png" alt="Product is onthe way" />
          <div className="line"></div>
        </div>
        <div className="notyet">
          <h2>Please receive your order</h2>
          <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-shopping-bag-black-friday-justicon-lineal-color-justicon-2.png" alt="Please receive your order" />
          <div className="line"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
