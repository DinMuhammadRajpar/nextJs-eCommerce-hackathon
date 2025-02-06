'use client'

import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { product } from '@/types/product';

interface props {
    category : string
}




const AllProductsListing = (props:props) => {
    // const all_products = await client.fetch(`*[_type == "product"]{
    //       _id,
    //       "imageUrl": image.asset->url,
    //       name,
    //         price
    //     }`)
    let result:string 
    if(props.category == "all items" || props.category == "tableware" ||props.category == "chairs" ||props.category == "ceramics" ||props.category == "tables" ||props.category == "cutlery" ||props.category == "crockory" ||props.category == "plant-pots"){
        result = props.category
    } else{
        result = "all items"
    }

    const [position] = React.useState(result)

    // const [position, setPosition] = useState<string>("all items");

    // useEffect(() => {
    //     // Update the position when the category prop changes
    //     let result: string;
    //     if (props.category === "all items" || props.category === "tableware" || props.category === "chairs" || props.category === "ceramics" || props.category === "tables" || props.category === "cutlery" || props.category === "crockory" || props.category === "plant-pots") {
    //         result = props.category
    //     } else {
    //         result = "all items"
    //     }

    //     setPosition(result); // Update position state when category changes
    // }, []);
    
    const [productData, setProductData] = useState<product[] | []>([])
    // const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        setProductData([])
        // setError(null)
        async function dataFetch() {
            try{
                if(position == "all items"){
            const data = await client.fetch(`*[_type == "product"]{
                                _id,
                                category,
                                 price,
                              name,
                              "slug":slug.current,
                            tags,
                             "image" : image.asset->url
    }`)
            setProductData(data)
                } else if(position != "all items"){
                    const data = await client.fetch(`*[_type == "product" && category._ref match "*${position}*"]{
                        _id,
                        category,
                         price,
                      name,
                      "slug":slug.current,
                    tags,
                     "image" : image.asset->url
}`)
    setProductData(data)
                }
            }catch(error){
                console.log("Failed to load Products: ",error);
                    // setError("Failed to load or there might be an internet issue...")
            }
        }
        dataFetch()

    }, [position])
  return (
    <div>
      {/* <Listing items={AllProducts} buttonText="View collection" /> */}

      <div
        id="products"
        // className={`container w-full lg:w-[1182px] grid grid-cols-4 md:gap-x-[10px] gap-x-[10px] gap-y-[35px] auto-rows-auto auto-col-auto md:mx-auto px-3 ${className}`}
        className={`container w-full lg:w-[1182px] grid grid-cols-4 md:gap-x-[10px] gap-x-[10px] gap-y-[35px] auto-rows-auto auto-col-auto md:mx-auto px-3 my-[40px] py-[40px]`}
      >
        {/* <div className="col-start-1 col-span-4">
          <h1 className="font-clashDisplay text-[32px] font-normal leading-[39.36px] text-start ">
            {heading}
            All Products
          </h1>
        </div> */}
        {productData.map((item: product) => (
          <div key={item._id} className=" md:col-span-1 col-span-2">
            <div className="relative w-full h-[289px] overflow-hidden">
              <Link href={`/Product/${item.slug}`}>
                <Image
                  src={item.image}
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
}



export default AllProductsListing;