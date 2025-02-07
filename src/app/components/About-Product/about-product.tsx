"use client";

import { client } from "@/sanity/lib/client";
import { product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";

interface props {
  slug: string;
}

const AboutProduct = ({ slug }: props) => {
  // const [cart, setCart] = useState(JSON.parse("{}"));
  // const [setCart] = useState(JSON.parse("{}"));
  const [productData, setProductData] = useState<product[] | []>([]);
  const [error, setError] = useState<string | null>(null);
  // const [quantitity] = useState<number>(1);
  // const [quantitity, setQuantity] = useState<number>(1);
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart") || "{}"));
  // }, []);
  useEffect(() => {
    async function dataFetch() {
      try {
        const data =
          await client.fetch(`*[_type == "product" && slug.current == "${slug}"]{
                    _id,
                    price,
                    description,
                    features,
                    dimensions,
                    name,
                    slug,
                    tags,
                    "image" : image.asset->url
                }`);
        setProductData(data);
      } catch (error) {
        console.log("Failed to load Products: ", error);
        setError("Failed to load or there might be an internet issue...");
      }
    }
    dataFetch();
  }, [slug]);
  const data = productData[0];
  // const notify = () =>
  //   toast.success(`${quantitity} ${data.name} added in your cart.`, {
  //     iconTheme: {
  //       primary: "#2A254B",
  //       secondary: "#FFFAEE",
  //     },
  //   });
  // function handleAddToCart() {
  //   if (cart[data.name]) {
  //     cart[data.name] = {
  //       ...cart[data.name],
  //       quantity: cart[data.name].quantity + quantitity,
  //     };
  //   } else {
  //     cart[data.name] = {
  //       ...data,
  //       quantity: quantitity,
  //     };
  //   }
  //   if (typeof window !== "undefined" && window.localStorage) {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   } else {
  //     console.log("Use browser");
  //   }
  //   setQuantity(1);
  //   notify();
  // }

  return (
    <div>
      {productData.length == 0 ? (
        error ? (
          <div className="flex justify-center items-center py-10 text-center h-[50vh] ">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
              {error}
            </p>
          </div>
        ) : (
          <div className="flex justify-center items-center py-10 h-[50vh]">
            <CircularProgress color="inherit" />
          </div>
        )
      ) : (
        <div className="w-full">
          <div className="grid grid-cols-12 gap-y-[15px]">
            <div className="col-start-1 md:col-span-6 col-span-12">
              <Image
                src={data.image}
                alt={data?.name}
                width={721}
                height={759}
                layout="responsive"
              />
            </div>
            <div className="col-start-1 md:col-start-7 md:col-span-6 col-span-12 self-center md:p-0 p-3">
              <div className="grid grid-cols-12 gap-y-[20px]">
                <div className="md:col-start-2 col-start-1 md:col-span-6 col-span-12">
                  <h1 className="font-clashDisplay text-[36px] font-normal leading-[44.28px] text-left text-[#2A254B] mb-2">
                    {/* The Dandy Chair  */}
                    {data?.name}
                  </h1>
                  <h4 className="font-satoshi text-[24px] font-normal leading-[32.4px] text-left text text-[#2A254B]">
                    {/* £250 */}
                    £{data?.price}
                  </h4>
                </div>
                <div className="md:col-start-2 col-start-1 md:col-span-9 col-span-12">
                  <h3 className="font-clashDisplay text-[16px] font-normal leading-[19.68px] text-left text-[#2A254B] mb-4">
                    Product Description
                  </h3>
                  <p className="font-satoshi text-[16px] font-normal leading-[21.68px] text-left text-[#505977] mb-3">
                    {/* A timeless design, with premium materials features as one of
                  our most popular and iconic pieces. The dandy chair is perfect
                  for any stylish living space with beech legs and lambskin
                  leather upholstery. */}
                    {data?.description}
                  </p>
                  <ul className="font-satoshi text-[16px] font-normal leading-[21.68px] text-left text-[#505977] list-disc">
                    {data.features.map((i, index)=> <li key={index}>{i}</li>)}
                    {/* <li className="ml-3">Premium material</li>
                    <li className="ml-3">Handmade upholstery</li>
                    <li className="ml-3">Quality timeless classic</li> */}
                  </ul>
                </div>
                <div className="md:col-start-2 col-start-1 md:col-span-11 col-span-12">
                  <h3 className="font-clashDisplay text-[16px] font-normal leading-[19.68px] text-left text-[#2A254B] mb-2">
                    Dimensions
                  </h3>
                  <div className="flex gap-5">
                    <div>
                      <h5 className="font-clashDisplay text-[14px] font-normal leading-[17.22px] text-left text-[#2A254B]">
                        Height
                      </h5>
                      <p className="font-satoshi text-[16px] font-normal leading-[21.68px] text-left text-[#505977]">
                        {data.dimensions.height}
                      </p>
                    </div>
                    <div className="border border-[#EBE8F4] md:hidden block"></div>
                    <div>
                      <h5 className="font-clashDisplay text-[14px] font-normal leading-[17.22px] text-left text-[#2A254B]">
                        width
                      </h5>
                      <p className="font-satoshi text-[16px] font-normal leading-[21.68px] text-left text-[#505977]">
                      {data.dimensions.width}
                      </p>
                    </div>
                    <div className="border border-[#EBE8F4] md:hidden block"></div>
                    <div>
                      <h5 className="font-clashDisplay text-[14px] font-normal leading-[17.22px] text-left text-[#2A254B]">
                        Depth
                      </h5>
                      <p className="font-satoshi text-[16px] font-normal leading-[21.68px] text-left text-[#505977]">
                      {data.dimensions.depth}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-start-2 col-start-1 md:col-span-1 col-span-1 self-center md:text-center text-left">
                  <p className="font-clashDisplay text-[14px] font-normal leading-[17.22px] text-left text-[#2A254B] mr-3">
                    Amount:
                  </p>
                </div>
                <div className="md:col-start-3 col-start-1 md:col-span-2 col-span-12 self-center">
                  <p className="py-[8px] px-[54px] bg-[#F9F9F9] text-center">
                    1
                  </p>
                </div>
                <div className="md:col-start-9 col-start-1 md:col-span-2 col-span-12">
                  {/* <div className=""> */}
                  <Link href="/shopping-cart">
                    <button className="bg-[#2A254B] py-[16px] px-[18px] text-white md:w-[120px] w-full">
                      Add to cart
                    </button>
                  </Link>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutProduct;
