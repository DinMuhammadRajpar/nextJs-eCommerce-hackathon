import React from "react";

const AboutUsHero = () => {
  return (
    <div>
      <div className="container mx-auto w-full lg:w-[1182px] md:px-0 px-3 py-[30px]">
        <div className="grid grid-cols-12">
          <div className="md:col-start-2 col-start-1 md:col-span-7 col-span-12">
            <h1 className="font-clashDisplay text-[36px] font-normal leading-[50.4px] text-left">
              A brand built on the love of craftmanship, quality and outstanding
              customer service
            </h1>
          </div>
          <div className="md:col-start-11 col-start-1 md:col-span-4 col-span-12 self-center justify-self-center">
            <button className="px-[30px] py-[15px] bg-[#F9F9F9] font-satoshi text-[16px] font-normal leading-[24px] text-left">
              View our products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
