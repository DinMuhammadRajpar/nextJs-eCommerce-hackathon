import React from "react";
import ProductsBanner from "../components/Product-Banner/product-banner";
import Filter from "../components/Filter/filter";
import Listing from "../components/Listing-Section/listing-section";

const ProductListing = () => {
  const AllProducts = [
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
    {
      id: 5,
      src: "/Golden-Hood-Lamps.png",
      alt: "The Dandy chair",
      productName: "The Dandy chair",
      productPrice: 250,
    },
    {
      id: 6,
      src: "/Rustic Vase Set New.png",
      alt: "Rustic Vase Set New",
      productName: "Rustic Vase Set",
      productPrice: 155,
    },
    {
      id: 7,
      src: "/Stool.png",
      alt: "Stool",
      productName: "The Silky Vase",
      productPrice: 125,
    },
    {
      id: 8,
      src: "/Colorful Chairs.png",
      alt: "Colorful Chairs",
      productName: "The Lucy Lamp",
      productPrice: 399,
    },
    {
      id: 9,
      src: "/The Dandy chair.png",
      alt: "The Dandy chair",
      productName: "The Dandy chair",
      productPrice: 250,
    },
    {
      id: 10,
      src: "/Rustic Vase Set.png",
      alt: "Rustic Vase Set",
      productName: "Rustic Vase Set",
      productPrice: 155,
    },
    {
      id: 11,
      src: "/The Silky Vase.png",
      alt: "The Silky Vase",
      productName: "The Silky Vase",
      productPrice: 125,
    },
    {
      id: 12,
      src: "/The Lucy Lamp.png",
      alt: "The Lucy Lamp",
      productName: "The Lucy Lamp",
      productPrice: 399,
    },
  ];
  return (
    <div>
      <ProductsBanner />
      <Filter />
      <Listing items={AllProducts} buttonText="View collection" />
    </div>
  );
};

export default ProductListing;
