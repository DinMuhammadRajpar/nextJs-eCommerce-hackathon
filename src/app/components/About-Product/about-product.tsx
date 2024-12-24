import Image from "next/image";
import React from "react";

const AboutProduct = () => {
  return (
    <div>
      <div className="w-full">
        <div className="grid grid-cols-12 gap-y-[15px]">
          <div className="col-start-1 md:col-span-6 col-span-12">
            <Image
              src="/Image Left.png"
              alt="Produvt Image"
              width={721}
              height={759}
              layout="responsive"
            />
          </div>
          <div className="col-start-1 md:col-start-7 md:col-span-6 col-span-12 self-center md:p-0 p-3">
            <div className="grid grid-cols-12 gap-y-[20px]">
              <div className="md:col-start-2 col-start-1 md:col-span-6 col-span-12">
                <h1 className="font-clashDisplay text-[36px] font-normal leading-[44.28px] text-left text-[#2A254B] mb-2">
                  The Dandy Chair
                </h1>
                <h4 className="font-satoshi text-[24px] font-normal leading-[32.4px] text-left text text-[#2A254B]">
                  £250
                </h4>
              </div>
              <div className="md:col-start-2 col-start-1 md:col-span-9 col-span-12">
                <h3 className="font-clashDisplay text-[16px] font-normal leading-[19.68px] text-left text-[#2A254B] mb-4">
                  Product Description
                </h3>
                <p className="font-satoshi text-[16px] font-normal leading-[21.68px] text-left text-[#505977] mb-3">
                  A timeless design, with premium materials features as one of
                  our most popular and iconic pieces. The dandy chair is perfect
                  for any stylish living space with beech legs and lambskin
                  leather upholstery.
                </p>
                <ul className="font-satoshi text-[16px] font-normal leading-[21.68px] text-left text-[#505977] list-disc">
                  <li className="ml-3">Premium material</li>
                  <li className="ml-3">Handmade upholstery</li>
                  <li className="ml-3">Quality timeless classic</li>
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
                      110cm
                    </p>
                  </div>
                  <div className="border border-[#EBE8F4] md:hidden block"></div>
                  <div>
                    <h5 className="font-clashDisplay text-[14px] font-normal leading-[17.22px] text-left text-[#2A254B]">
                      width
                    </h5>
                    <p className="font-satoshi text-[16px] font-normal leading-[21.68px] text-left text-[#505977]">
                      75cm
                    </p>
                  </div>
                  <div className="border border-[#EBE8F4] md:hidden block"></div>
                  <div>
                    <h5 className="font-clashDisplay text-[14px] font-normal leading-[17.22px] text-left text-[#2A254B]">
                      Depth
                    </h5>
                    <p className="font-satoshi text-[16px] font-normal leading-[21.68px] text-left text-[#505977]">
                      50cm
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
                <p className="py-[8px] px-[54px] bg-[#F9F9F9] text-center">1</p>
              </div>
              <div className="md:col-start-9 col-start-1 md:col-span-2 col-span-12">
                {/* <div className=""> */}
                <button className="bg-[#2A254B] py-[16px] px-[18px] text-white md:w-[120px] w-full">
                  Add to cart
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
