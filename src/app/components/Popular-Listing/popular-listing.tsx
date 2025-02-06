import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// interface PopularProducts {
//   id: number;
//   src: string;
//   alt: string;
//   productName: string;
//   productPrice: number;
// }

// interface PopularListingProps {
//   heading?: string;
//   buttonText: string;
//   items: PopularProducts[];
// }

interface Item {
  _id: string;
  src: string;
  alt: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
}

// const PopularListing: React.FC<PopularListingProps> = ({
//   heading,
//   buttonText,
//   items,
// }) => {

const PopularListing = async () =>{

  const popular_products = await client.fetch(`*[_type == "product" && category._ref == "tables-9"][0...2] {
      _id,
      "imageUrl": image.asset->url,
      name,
      "slug":slug.current,
        price
    }`)


  return (
    <div>
      <div id="popular-listing" className="container w-full lg:w-[1182px] grid grid-cols-4 md:gap-x-[10px] gap-x-[10px] gap-y-[35px] auto-rows-auto auto-col-auto md:mx-auto my-[40px] px-3 py-[40px]">
        <div className="col-start-1 col-span-4">
          <h1 className="font-clashDisplay text-[32px] font-normal leading-[39.36px] text-start ">
          Our popular products
          </h1>
        </div>
        <div className="col-start-1 md:col-span-2 col-span-4">
          <div className="relative h-[347px]">
            <Link href={`/Product/the-poplar-suede-sofa`}>
              <Image
                src="/The Poplar suede sofa.jpg"
                alt="The Poplar suede sofa"
                fill
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <div className="my-[10px]">
            <div>
              <span className="font-satoshi text-[19px] font-bold leading-[27px] text-left">
                The Poplar suede sofa
              </span>
            </div>
            <div>
              <p>£980</p>
            </div>
          </div>
        </div>
        {popular_products.map((item: Item) => (
          <div key={item._id} className=" md:col-span-1 col-span-2">
            <div className="relative w-full h-[347px] overflow-hidden">
              <Link href={`/Product/${item.slug}`}>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  // width={407}
                  // height={289}
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <div className="my-[10px]">
              <div>
                <span className="font-satoshi text-[19px] font-bold leading-[27px] text-left">
                  {item.name}
                </span>
              </div>
              <div>
                <p>£{item.price}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-start-1 col-span-4 place-self-center text-center">
          <Link href="/Product-Listing">
            <button className="font-satoshi text-[16px] font-medium leading-[21.6px]  place-self-center border border-[#0000001A] rounded-[62px] px-[54px] py-[16px] hover:bg-[#F0EEED] transition duration-200 ease-in-out cursor-pointer">
            View collection
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularListing;
