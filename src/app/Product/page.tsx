import React from "react";
import AboutProduct from "../components/About-Product/page";
import Listing from "../components/Listing-Section/page";
import FeaturesSection from "../components/Features-Section/page";
import EmailSignup from "../components/Email-signup/page";

const Product = () => {
  const heighlightedProducts = [
    {
      id: 1,
      src: "/The Dandy chair.png",
      alt: "The Dandy chair",
      productName: "The Dandy chair",
      productPrice: 250,
    },
    {
      id: 2,
      src: "/Rustic Vase Set.png",
      alt: "Rustic Vase Set",
      productName: "Rustic Vase Set",
      productPrice: 155,
    },
    {
      id: 3,
      src: "/The Silky Vase.png",
      alt: "The Silky Vase",
      productName: "The Silky Vase",
      productPrice: 125,
    },
    {
      id: 4,
      src: "/The Lucy Lamp.png",
      alt: "The Lucy Lamp",
      productName: "The Lucy Lamp",
      productPrice: 399,
    },
  ];
  return (
    <div>
      <AboutProduct />
      <Listing
        heading="You might also like"
        items={heighlightedProducts}
        buttonText="View collection"
        className="my-[40px] py-[40px]"
      />
      <FeaturesSection/>
      <EmailSignup/>
    </div>
  );
};

export default Product;
