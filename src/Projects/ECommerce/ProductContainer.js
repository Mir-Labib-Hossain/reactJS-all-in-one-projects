import React, { useState } from "react";
import Product from "./Product";

export default function ProductContainer() {
  const [blackProduct, setBlackProduct] = useState([
    {
      name: "KYLIE Lip kit [Limited Eddition]",
      offer: undefined,
      price: 300,
      image: "https://cdn.shopify.com/s/files/1/0420/2905/6153/products/kylielipkit_1000x.jpg?v=1624402140",
    },
    {
      name: "Mi Smart Watch (Black)",
      offer: undefined,
      price: 899,
      image: "https://www.trevor-tech.com/wp-content/uploads/2021/05/Picture72-1.png",
    },
  ]);
  const [blackProduct50, setBlackProduct50] = useState([
    {
      name: "White Africa Mapped Tee-Shirt - M, X, XL",
      offer: 250,
      price: (50 * 250) / 100,
      image: "https://images-platform.99static.com//21TSGZ6UO1OHgVvF--vFurUbDqI=/0x0:2040x2040/fit-in/500x500/99designs-contests-attachments/117/117467/attachment_117467214",
    },
    {
      name: "Magicial hat (with magic stick)",
      offer: 100,
      price: (50 * 100) / 100,
      image: "https://www.pngall.com/wp-content/uploads/2017/05/Magic-Hat-PNG-Image.png",
    },
  ]);
  const [blackProduct70, setBlackProduct70] = useState([
    {
      name: "Basketball Jacket of BULL BlackFriday Special",
      offer: 500,
      price: (30 * 550) / 100,
      image: "https://sc02.alicdn.com/kf/Hae74b6d057ac43c98f66b1ea790cb4e4N.jpg",
    },
    {
      name: "iPhone 13 Pro Max Matte Black 256gb",
      offer: 1399,
      price: (30 * 1399) / 100,
      image: "https://www.slickwraps.com/media/catalog/product/cache/1/image/580x580/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone13promax_color_matteblack_1.jpg",
    },
  ]);
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header " id="headingOne">
            <button className="accordion-button accordionOne collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-sale-black-friday-justicon-lineal-color-justicon-1.png" alt="70% off logo"/>
              <h2>Flat 70% OFF !!!</h2>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {blackProduct70.map((bp) => {
                return <Product name={bp.name} price={bp.price} offer={bp.offer} image={bp.image} key={bp.name}></Product>;
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button accordionTwo collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-shopping-bag-black-friday-justicon-lineal-color-justicon.png" alt="50% sale logo"/>
              <h2>Fill your bag with 50% Sale !!!</h2>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {blackProduct50.map((bp) => {
                return <Product name={bp.name} price={bp.price} offer={bp.offer} image={bp.image} key={bp.name}></Product>;
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button accordionThree collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/100/000000/external-black-friday-black-friday-justicon-lineal-color-justicon.png" alt="BF logo"/>
              <h2> Black Friday Special !</h2>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {blackProduct.map((bp) => {
                return <Product name={bp.name} price={bp.price} offer={bp.offer} image={bp.image} key={bp.name}></Product>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
