import React, { useContext } from "react";
import { CartContext } from "./BlackFriday";
export default function CartProduct(props) {
  const { cart, setHandler } = useContext(CartContext);
  let { name, price, offer, image } = props;
  return (
    <div className="product cart-product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p>${price}</p>
      <button type="button" className="btn btn-outline-danger" onClick={() => setHandler({ name, price, offer, image }, -1)}>
        <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/20/000000/external-shopping-basket-black-friday-justicon-lineal-color-justicon.png" alt="cart icon" />
        <p> Remove</p>
      </button>
    </div>
  );
}
