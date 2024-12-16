import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { GoCreditCard } from "react-icons/go";
import { LuSprout } from "react-icons/lu";

const FeaturesSection = () => {
  return (
    
      <div className="container w-full lg:w-[1182px] md:mx-auto my-5 py-5">
        <div className ="grid grid-cols-8 gap-x-3 gap-y-5 auto-col-auto px-3">
          <div className="col-start-1 col-span-8">
            <h1 className="font-clashDisplay text-[24px] font-normal leading-[33.6px] text-left md:text-center text-start py-[20px]">
              What makes our brand different
            </h1>
          </div>
          <div className="md:col-start-1 md:col-span-2 sm:col-span-4 col-start-1 col-span-8">
            <TbTruckDelivery className="mb-2 text-2xl" />
            <h3 className="font-clashDisplay text-[20px] font-normal leading-[28px] text-left mb-2">
              Next day as standard
            </h3>
            <p className="font-satoshi text-[16px] font-normal leading-[24px] text-left">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="md:col-start-3 md:col-span-2 sm:col-start-5 sm:col-span-4 col-start-1 col-span-8">
            <IoCheckmarkCircleOutline className="mb-2 text-2xl" />
            <h3 className="font-clashDisplay text-[20px] font-normal leading-[28px] text-left mb-2">
              Made by true artisans
            </h3>
            <p className="font-satoshi text-[16px] font-normal leading-[24px] text-left">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="md:col-start-5 md:col-span-2 sm:col-start-1 sm:col-span-4 col-start-1 col-span-8">
            <GoCreditCard className="mb-2 text-2xl" />
            <h3 className="font-clashDisplay text-[20px] font-normal leading-[28px] text-left mb-2">
              Unbeatable prices
            </h3>
            <p className="font-satoshi text-[16px] font-normal leading-[24px] text-left">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div className="md:col-start-7 md:col-span-2 sm:col-start-5 sm:col-span-4 col-start-1 col-span-8">
            <LuSprout className="mb-2 text-2xl" />
            <h3 className="font-clashDisplay text-[20px] font-normal leading-[28px] text-left mb-2">
              Recycled packaging
            </h3>
            <p className="font-satoshi text-[16px] font-normal leading-[24px] text-left">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
  );
};

export default FeaturesSection;
