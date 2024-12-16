import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-12 ">
        <div className="container mx-auto col-start-1 col-span-12 md:col-start-1 md:col-span-5 row-start-1 self-center md:ps-[80px] px-3">
          <h1 className="font-clashDisplay text-[20px] font-normal leading-[33px] text-[#2A254B] md:mb-3 mb-2">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p className="font-satoshi text-[14px] font-normal leading-[24px] text-[#2A254B] md:mb-3 mb-2">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="font-satoshi text-[14px] font-normal leading-[24px] text-[#2A254B] mb-3">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
        </div>
        <div className="container mx-auto col-start-1 col-span-12 md:col-start-1 md:col-span-3 row-start-2 md:self-end self-center md:justify-self-start justify-self-center md:ps-[80px] px-3 md:mb-0 md:mb-[30px] mb-3 w-full">
          <button className="bg-[#F9F9F9] py-[10px] px-[15px] w-full">
            Get in touch
          </button>
        </div>
        <div className="col-span-12 md:col-start-7 md:col-span-6 md:row-span-2 md:row-start-1">
          <Image
            src="/about_img.png"
            alt="The Poplar suede sofa"
            width={720}
            height={603}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
