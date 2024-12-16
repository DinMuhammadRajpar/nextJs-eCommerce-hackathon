import Image from "next/image";
import React from "react";

const AboutCollectionSection = () => {
  return (
    <div>
      <div className="container mx-auto w-full lg:w-[1182px] my-5">
        <div className="grid grid-cols-2 gap-x-4">
          <div className="col-start-1 md:col-span-1 col-span-2 md:py-[30px] md:py-2 px-5 py-4 text-white bg-[#2A254B] md:mx-0 mx-3">
            {/* <div> */}
            <h2 className="font-clashDisplay text-[32px] font-normal leading-[39.36px] text-left">
              It started with a small idea
            </h2>
            <p className="font-satoshi text-[18px] font-normal leading-[24.3px] text-left">
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
            {/* </div> */}
          </div>
          <div className="col-start-1 md:col-span-1 col-span-2 md:py-[30px] md:px-[40px] md:mx-0 mx-3 px-4 py-4 bg-[#2A254B]">
            <div>
              <button className="bg-[#F9F9F926] px-[30px] py-[20px] text-white self-center md:w-auto w-full  ">
                View collection
              </button>
            </div>
          </div>

          <div className="md:col-start-2 col-start-1 md:col-span-1 col-span-2 md:row-start-1 row-start-3 md:row-span-2 row-span-1 md:my-0 md:mx-0 mx-3 md:mt-0 mt-3">
            <div>
              <Image
                src="/About-Image Block.png"
                alt="Block Image"
                width={630}
                height={478}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCollectionSection;
