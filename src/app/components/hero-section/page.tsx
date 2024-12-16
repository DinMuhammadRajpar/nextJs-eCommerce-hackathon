import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="md:bg-transparent bg-[#2A254B] w-full">
    <div className=" md:bg-[#2A254B] bg-transparent container mx-auto w-full lg:w-[1182px] md:px-0 px-3 md:py-0 py-5 md:my-0 my-5">
      <div className=" grid grid-cols-12 auto-rows-auto">
        <div className="md:col-start-2 col-start-1 md:col-span-4 col-span-10 self-center mb-[20px]">
          <h1 className="font-clashDisplay text-[30px] font-normal leading-[44.8px] text-left text-white mb-[20px]">
            The furniture brand for the future, with timeless designs
          </h1>
          <button className="px-4 py-3 bg-[#F9F9F926] md:block hidden text-white ">
            {" "}
            <link href="#"/>
            View collection
          </button>
        </div>
        <div className="col-start-9 col-span-4 row-span-2 mx-0 md:grid hidden h-[100%]">
          <Image
            src="/Right Image.png"
            alt="Down arrow frame"
            width={520}
            height={584}
            layout="responsive"
          />
        </div>
        <div className="row-start-2 md:col-start-2 col-start-1 md:col-span-6 col-span-10 self-center mb-[20px]">
          <h4 className="font-satoshi text-[14px] font-normal leading-[27px] text-left text-white">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </h4>
        </div>
        <div className="col-start-1 col-span-12 md:hidden grid">
          <button className="px-4 py-3 bg-[#F9F9F926] text-white">
            {" "}
            <link href="#"/>
            View collection
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
