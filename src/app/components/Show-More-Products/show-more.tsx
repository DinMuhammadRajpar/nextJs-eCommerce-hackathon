import { client } from '@/sanity/lib/client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface Item {
  _id: string;
  src: string;
  alt: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}


const ShowMoreProducts = async () => {
    const data = await client.fetch(`*[_type == "product"][0...4]{
        _id,
         price,
      name,
      "slug" : slug.current,
     "image" : image.asset->url
    }`);
  return (
    <div> 
        <div>
      <div
        id="products"
        // className={`container w-full lg:w-[1182px] grid grid-cols-4 md:gap-x-[10px] gap-x-[10px] gap-y-[35px] auto-rows-auto auto-col-auto md:mx-auto px-3 ${className}`}
        className={`container w-full lg:w-[1182px] grid grid-cols-4 md:gap-x-[10px] gap-x-[10px] gap-y-[35px] auto-rows-auto auto-col-auto md:mx-auto px-3 my-[40px] py-[40px]`}
      >
        <div className="col-start-1 col-span-4">
          <h1 className="font-clashDisplay text-[32px] font-normal leading-[39.36px] text-start ">
            {/* {heading} */}
            You may also like
          </h1>
        </div>
        {data.map((item: Item) => (
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
          {/* <Link href="/Product-Listing">
            <button className="font-satoshi text-[16px] font-medium leading-[21.6px]  place-self-center border border-[#0000001A] rounded-[62px] px-[54px] py-[16px] hover:bg-[#F0EEED] transition duration-200 ease-in-out cursor-pointer">
            View collection
            </button>
          </Link> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default ShowMoreProducts