import { client } from "@/sanity/lib/client";
import { product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Item {
  id: number;
  src: string;
  alt: string;
  productName: string;
  productPrice: number;
}

interface listingProps {
  heading?: string;
  buttonText: string;
  items: Item[];
  className?: string;
}



// const Listing: React.FC<listingProps> = ({
//   heading,
//   buttonText,
//   items,
//   className,
// }) => {
const Listing= async () =>{

  const new_ceremic = await client.fetch(`*[_type == "product" && (category._ref == "ceramics-7" || category._ref == "tables-9" )][0...4] {
    _id,
    "imageUrl": image.asset->url,
    name,
  "slug":slug.current,
      price
  }`)

//   const [productData, setProductData] = useState<product[] | []>([])
//     const [error, setError] = useState<string | null>(null);
//     useEffect(() => {
//         async function dataFetch() {
//             try{
//             const data = await client.fetch(`*[_type == "product" && ("popular products" in tags || "new ceramics" in tags)]{
//                             _id,
//                              price,
//                           name,
//                           "slug":slug.current,
//                         tags,
//                          "image" : image.asset->url
// }`)
//             setProductData(data)
//             }catch(error){
//                 console.log("Failed to load Products: ",error);
//                     setError("Failed to load or there might be an internet issue...")
//             }
//         }
//         dataFetch()

//     }, [])
//     const popularProducts = productData.filter(item => item.tags.includes("popular products"));
//     const newCeramics = productData.filter(item => item.tags.includes("new ceramics"));
  

  return (
    <div>
      <div
        id="products"
        // className={`container w-full lg:w-[1182px] grid grid-cols-4 md:gap-x-[10px] gap-x-[10px] gap-y-[35px] auto-rows-auto auto-col-auto md:mx-auto px-3 ${className}`}
        className={`container w-full lg:w-[1182px] grid grid-cols-4 md:gap-x-[10px] gap-x-[10px] gap-y-[35px] auto-rows-auto auto-col-auto md:mx-auto px-3 my-[40px] py-[40px]`}
      >
        <div className="col-start-1 col-span-4">
          <h1 className="font-clashDisplay text-[32px] font-normal leading-[39.36px] text-start ">
            {/* {heading} */}
            New ceramics
          </h1>
        </div>
        {new_ceremic.map((item: any) => (
          <div key={item._id} className=" md:col-span-1 col-span-2">
            <div className="relative w-full h-[289px] overflow-hidden rounded-lg">
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
        <div className="col-start-1 col-span-4 place-self-center text-center mb-5">
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

export default Listing;
