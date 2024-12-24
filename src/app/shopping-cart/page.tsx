import React from "react";
import Cart from "../components/Cart/cart";

const ShoppingCart = () => {
  const cartProducts = [
    {
      id: 1,
      src: "/Graystone vase_cart.png",
      alt: "Graystone vase_cart",
      productName: "Graystone vase_cart",
      productDesc: "A timeless ceramic vase with a tri color grey glaze",
      productPrice: 85,
      productQuantity: 1,
      total: 85,
    },
    {
      id: 2,
      src: "/Basic white vase_cart.png",
      alt: "Basic white vase",
      productName: "Basic white vase",
      productDesc: "Beautiful and simple this is one for the classics",
      productPrice: 85,
      productQuantity: 1,
      total: 125,
    },
  ];
  return (
    <div>
      <Cart items={cartProducts}/>
    </div>
  );
};

export default ShoppingCart;
