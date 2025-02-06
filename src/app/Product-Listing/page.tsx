import React from "react";
import ProductsBanner from "../components/Product-Banner/product-banner";
import Filter from "../components/Filter/filter";
import { client } from "@/sanity/lib/client";
import AllProductsListing from "../components/all-products-listing/all-products-listing";

const ProductListing = async () => {

  // const all_products = await client.fetch(`*[_type == "product"]{
  //     _id,
  //     "imageUrl": image.asset->url,
  //     name,
  //       price
  //   }`)
  return (
    <div>
      <ProductsBanner />
      <Filter/>
      <AllProductsListing category="all items"/>

    </div>
  );
};

export default ProductListing;
