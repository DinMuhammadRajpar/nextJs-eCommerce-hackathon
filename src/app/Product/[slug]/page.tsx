import AboutProduct from "@/app/components/About-Product/about-product";
import EmailSignup from "@/app/components/Email-signup/email-signup";
import FeaturesSection from "@/app/components/Features-Section/features-section";
import ShowMoreProducts from "@/app/components/Show-More-Products/show-more";
import React from "react";


interface props {
  params: Promise<{
    slug: string
  }>
}

const Product = async ({params}:props) => {
  // const heighlightedProducts = [
  //   {
  //     id: 1,
  //     src: "/The Dandy chair.png",
  //     alt: "The Dandy chair",
  //     productName: "The Dandy chair",
  //     productPrice: 250,
  //   },
  //   {
  //     id: 2,
  //     src: "/Rustic Vase Set.png",
  //     alt: "Rustic Vase Set",
  //     productName: "Rustic Vase Set",
  //     productPrice: 155,
  //   },
  //   {
  //     id: 3,
  //     src: "/The Silky Vase.png",
  //     alt: "The Silky Vase",
  //     productName: "The Silky Vase",
  //     productPrice: 125,
  //   },
  //   {
  //     id: 4,
  //     src: "/The Lucy Lamp.png",
  //     alt: "The Lucy Lamp",
  //     productName: "The Lucy Lamp",
  //     productPrice: 399,
  //   },
  // ];
  const {slug} = await params
  return (
    <div>
      <AboutProduct 
      slug={slug}/>
      {/* <Listing
        heading="You might also like"
        items={heighlightedProducts}
        buttonText="View collection"
        className="my-[40px] py-[40px]"
      /> */}
      <ShowMoreProducts/>
      <FeaturesSection/>
      <EmailSignup/>
    </div>
  );
};

export default Product;
