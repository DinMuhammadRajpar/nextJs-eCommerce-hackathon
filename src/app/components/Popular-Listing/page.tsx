import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PopularProducts {
  id: number;
  src: string;
  alt: string;
  productName: string;
  productPrice: number;
}

interface PopularListingProps {
  heading?: string;
  buttonText: string;
  items: PopularProducts[];
}

const PopularListing: React.FC<PopularListingProps> = ({
  heading,
  buttonText,
  items,
}) => {
  return (
    <div>
      <div className="container w-full lg:w-[1182px] grid grid-cols-4 md:gap-x-[10px] gap-x-[10px] gap-y-[35px] auto-rows-auto auto-col-auto md:mx-auto my-[40px] px-3 py-[40px]">
        <div className="col-start-1 col-span-4">
          <h1 className="font-clashDisplay text-[32px] font-normal leading-[39.36px] text-start ">
            {heading}
          </h1>
        </div>
        <div className="col-start-1 md:col-span-2 col-span-4">
          <div className="relative h-[347px]">
            <Link href="/Product">
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
        {items.map((item) => (
          <div key={item.id} className=" md:col-span-1 col-span-2">
            <div>
              <Link href="/Product">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={407}
                  height={289}
                  layout="responsive"
                />
              </Link>
            </div>
            <div className="my-[10px]">
              <div>
                <span className="font-satoshi text-[19px] font-bold leading-[27px] text-left">
                  {item.productName}
                </span>
              </div>
              <div>
                <p>£{item.productPrice}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-start-1 col-span-4 place-self-center text-center">
          <button className="font-satoshi text-[16px] font-medium leading-[21.6px]  place-self-center border border-[#0000001A] rounded-[62px] px-[54px] py-[16px] hover:bg-[#F0EEED] transition duration-200 ease-in-out cursor-pointer">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularListing;
