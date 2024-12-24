"use client";

import HeroSection from "./components/hero-section/hero-section";
import FeaturesSection from "./components/Features-Section/features-section";
import Listing from "./components/Listing-Section/listing-section";
import PopularListing from "./components/Popular-Listing/popular-listing";
import EmailSignup from "./components/Email-signup/email-signup";
import About from "./components/About-bottom/about-bottom";

export default function Home() {
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
  const PopularProducts = [
    {
      id: 1,
      src: "/The Dandy chair.png",
      alt: "The Dandy chair",
      productName: "The Dandy chair",
      productPrice: 250,
    },
    {
      id: 5,
      src: "/The Dandy chair 2.png",
      alt: "The Dandy chair 2",
      productName: "The Dandy chair",
      productPrice: 250,
    },
  ];
  return (
    <div>
      <HeroSection/>
      <FeaturesSection/>
      <Listing heading="New ceramics"
      items={heighlightedProducts}
      buttonText="View collection"
      className="my-[40px] py-[40px]"/>
      <PopularListing heading="Our popular products"
      items={PopularProducts}
      buttonText="View collection"
      />
      <EmailSignup/>
      <About/>
    </div>
  );
}
